// Assignment Code

var generateBtn = document.querySelector("#generate");
var password = generatePassword();
var passwordText = document.querySelector("#password");
var numChars = "012356789";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!@#$%^&*_?";


function writePassword() {
  var passwordLength = window.prompt("How many characters would you like?");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) == true) {
    userChoice = window.prompt("Please enter a valid number between, 8 and 128 characters.")
    return null;
  } 
  var userUppercase = window.confirm("Uppercase?");
  var userLowercase = window.confirm("Lowercase?"); 
  var userNumbers = window.confirm("Numbers?");
  var userSpecialChars = window.confirm("Any Special Characters?"); 

  if (userUppercase === false && userLowercase === false && userNumbers === false && userSpecialChars === false) {
    window.alert("Must select atleast one character type!")
  }

  // User confirm all character types

  if (userUppercase === true && userLowercase === true && userNumbers === true &&userSpecialChars === true) {
    function generatePassword(passwordLength) {
      var result = "";
      var allChar = uppercaseChars.concat(numChars, lowercaseChars, specialChars)
      console.log(allChar)
      //var index = Math.floor(Math.random()* allChar.length)
      for (i = 0; i < passwordLength; i++) {
        result += allChar.charAt(Math.floor(Math.random()* allChar.length))  
      }
      return result;
    } 
    passwordText.innerHTML = generatePassword(passwordLength)
 }

 // User confirm all but Lowercase
 if (userUppercase === true && userLowercase === false && userNumbers === true && userSpecialChars === true) {
    function generatePassword(passwordLength) {
      var result = "";
      var allChar = uppercaseChars.concat(numChars, specialChars)
      console.log(allChar)
      for (i=0; i < passwordLength; i++) {
        result += allChar.charAt(Math.floor(Math.random()* allChar.length))
      }
      return result;
    }
    passwordText.innerHTML = generatePassword(passwordLength)
 }

 // User confirm all but Numbers
 if (userUppercase === true && userLowercase === true && userNumbers === false && userSpecialChars === true) {
  function generatePassword(passwordLength) {
    var result = "";
    var allChar = uppercaseChars.concat(lowercaseChars, specialChars)
    console.log(allChar)
    for (i=0; i < passwordLength; i++) {
      result += allChar.charAt(Math.floor(Math.random()* allChar.length))
    }
    return result;
  }
  passwordText.innerHTML = generatePassword(passwordLength)
 }

 // User confirm all but SpecialChars

 if (userUppercase === true && userLowercase === true && userNumbers === true && userSpecialChars === false) {
  function generatePassword(passwordLength) {
    var result = "";
    var allChar = uppercaseChars.concat(lowercaseChars, numChars)
    console.log(allChar)
    for(i=0; i < passwordLength; i++) {
      result += allChar.charAt(Math.floor(Math.random()* allChar.length))
    }
    return result
  }
  passwordText.innerHTML = generatePassword(passwordLength)
 }
  var userChoices = {
    passwordLength: passwordLength, 
    userUppercase: userUppercase,
    userLowercase: userLowercase,
    userNumbers: userNumbers,
    userSpecialChars: userSpecialChars,
  } 
  return userChoices
  
  
  

  
}


function generatePassword() {
  return 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

