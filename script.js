// User credentials - Username: ADMIN1, ADMIN2, ... Password: ADMIN1, ADMIN2, ...
const users = [
  { username: "ADMIN1", password: "ADMIN1", fullname: "Monirul Islam" },
  { username: "ADMIN2", password: "ADMIN2", fullname: "Pranto Mondal" },
  { username: "ADMIN3", password: "ADMIN3", fullname: "Somiron Mondal" },
  { username: "ADMIN4", password: "ADMIN4", fullname: "Partho Sarkar" },
  { username: "ADMIN5", password: "ADMIN5", fullname: "TUFAN(SUB-ADMIN)" },
  { username: "ADMIN6", password: "ADMIN6", fullname: "Nitish Kumar" },
  { username: "ADMIN7", password: "ADMIN7", fullname: "Ariyan Bappy" },
  { username: "ADMIN8", password: "ADMIN8", fullname: "RAJ" },
  { username: "ADMIN9", password: "ADMIN9", fullname: "Rana Vai" },
  { username: "ADMIN10", password: "ADMIN10", fullname: "Sudipto Mondal" },
  { username: "ADMIN11", password: "ADMIN11", fullname: "Amdad Ahmed" },
  { username: "ADMIN12", password: "ADMIN12", fullname: "Nirob Raj" },
  { username: "ADMIN13", password: "ADMIN13", fullname: "Apurbo Sarkar" },
  { username: "ADMIN14", password: "ADMIN14", fullname: "Avijit Mondal" },
];

// Sample OK UID List (তুমি এখানে আগে থেকে OK UID গুলো যোগ করবে)
const okUIDs = [
  "UID12345",
  "UID67890",
  "UIDABCDE",
  "UIDFGHIJ",
  "UIDKLMNO",
];

// Member Rate ও 100+ ID Rate
const memberRate = 20;  // এটা তুমি পরে পরিবর্তন করতে পারবে
const hundredPlusRate = 15;  // এটা ও

// DOM Elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginMsg = document.getElementById("loginMsg");
const dashboard = document.getElementById("dashboard");
const welcomeMsg = document.getElementById("welcomeMsg");
const uidInput = document.getElementById("uidInput");
const checkReportBtn = document.getElementById("checkReportBtn");
const reportSection = document.getElementById("reportSection");
const reportTableBody = document.querySelector("#reportTable tbody");
const totalOkSpan = document.getElementById("totalOk");
const totalBackSpan = document.getElementById("totalBack");
const amountSpan = document.getElementById("amount");
const totalAmountSpan = document.getElementById("totalAmount");
const memberRateSpan = document.getElementById("memberRate");
const hundredRateSpan = document.getElementById("hundredRate");

// Set initial rates in UI
memberRateSpan.textContent = memberRate;
hundredRateSpan.textContent = hundredPlusRate;

let currentUser = null;

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = usernameInput.value.trim().toUpperCase();
  const password = passwordInput.value.trim();

  const user = users.find(
