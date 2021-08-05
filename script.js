// Assignment Code
var generateBtn = document.querySelector("#generate");
let upper = ["abcdefghijklmnopqrstuvwxyz".split];
let lower = ["abcdefghijklmnopqrstuvwxyz".split];
let chosenValues = [];


function generatePassword(){
  let sign = prompt("Password Length?");
  // if (sign.




  // return "test";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
