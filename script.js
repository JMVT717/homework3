// Assignment Code
var generateBtn = document.querySelector("#generate");
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let special = ["!","@","#","$","%","^","&","*","?","/"]
let number = ["0","1","2","3","4","5","6","7","8","9"]
let chosenValue =[];


function generatePassword(){
  
  passwordLegnth = parseInt(prompt("Password Length? Choose between 8 and 128 characters."));
    result = window.confirm("include Lowercase?");
    if (window.confirm("Include Upercase?")) {
      window.confirm("Include Numbers?");
      window.confirm("Include Special Characters?");
    } 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
