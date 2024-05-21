const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbol = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
];

let password1 = document.getElementById("password1");
password1.textContent = "password one";
let password2 = document.getElementById("password2");
password2.textContent = "password two";

let passwordLength = 12;

document.getElementById("gen-pwd").addEventListener("click", generatePassword);

function generatePassword() {
  let isUppercase = document.getElementById("isUppercase");
  let isLowercase = document.getElementById("isLowercase");
  let isNumber = document.getElementById("isNumber");
  let isSymbol = document.getElementById("isSymbol");

  let chars = [];

  // default if all checkboxes are unchecked
  if (
    !isUppercase.checked &&
    !isLowercase.checked &&
    !isNumber.checked &&
    !isSymbol.checked
  ) {
    isUppercase.checked = true;
    isLowercase.checked = true;
    isNumber.checked = true;
    isSymbol.checked = true;
  }

  //combine user-selected characters into array
  if (isUppercase.checked) {
    chars = chars.concat(upperCase);
  }
  if (isLowercase.checked) {
    chars = chars.concat(lowerCase);
  }
  if (isNumber.checked) {
    chars = chars.concat(numbers);
  }
  if (isSymbol.checked) {
    chars = chars.concat(symbol);
  }

  let randomPassword1 = "";
  let randomPassword2 = "";

  for (let x = 0; x < passwordLength; x++) {
    randomPassword1 += chars[Math.floor(Math.random() * chars.length)];
    randomPassword2 += chars[Math.floor(Math.random() * chars.length)];
  }

  // displays password
  password1.setAttribute("value", randomPassword1);
  password2.setAttribute("value", randomPassword2);
}

// update password length
let slider = document.getElementById("myRange");
let output = document.getElementById("password-length");
output.innerHTML = slider.value;

slider.oninput = function () {
  passwordLength = this.value;
  output.innerHTML = this.value;
};

// copy password start ***************************************************/
// function needs to be improved with less code (there should only be one function)

document.getElementById("password1").addEventListener("click", copyPassword1);
document.getElementById("password2").addEventListener("click", copyPassword2);

function copyPassword1() {
  // Get the text field
  // var copyText = document.getElementById("myInput");

  // Select the text field
  password1.select();
  password1.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(password1.value);

  // Alert the copied text
  alert("Password 1 Copied");
}

function copyPassword2() {
  // Get the text field
  // var copyText = document.getElementById("myInput");

  // Select the text field
  password2.select();
  password2.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(password2.value);

  // Alert the copied text
  alert("Password 2 Copied");
}
// copy password end ***************************************************/
