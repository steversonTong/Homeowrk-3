// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthInput = document.querySelector("#charLength")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function charlength(){
  var numberOfChar = lengthInput.value;

  if(numberOfChar < 8) {
    alert("The number of charcter you asked for is less than 8! Please input character length that is more than 8 and less than 128!");
    return 0;
  }
  if (numberOfChar > 128) {
    alert("The number of charcter you asked for is greater than 128! Please input character length that is more than 8 and less than 128!");
    return 0;
  }
  else{
    return numberOfChar;
  }
}

function generatePassword() {
  var length = charlength();
  var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`=~!#$%^&*()+[]{};:,/<>?";
  var returnValue = "";

  for(var i = 0, n = char.length; i < length; i++) {
    returnValue += char.charAt(Math.floor(Math.random() * n));
  }
  return returnValue;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
