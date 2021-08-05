// Assignment Code
var generateBtn = document.querySelector("#generate");
let upper = ["abcdefghijklmnopqrstuvwxyz".split];
let lower = ["abcdefghijklmnopqrstuvwxyz".split];
let passwordLegnth = [];


function generatePassword(){
  
  passwordLegnth = parseInt(prompt("Password Length? Choose between 8 and 128 characters."));
    result = window.confirm("include Lowercase?");
    if (window.confirm("Include Upercase?")) {
      window.confirm("Include Numbers?");
      window.confirm("Include Special Characters?");
    } 
    return = password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
