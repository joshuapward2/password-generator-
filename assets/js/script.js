// Assignment code here
window.alert("Welcome to my password generator! Please follow the prompts to generate yours...")



// var passwordLength = charcount;

var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var specialCharactersChars = "!@#$%^&*()";
var numberChars = "1234567890";



function generatePassword(){
  var passwordReturned = ""
  var chars = ""
  var charcount = prompt("How many character would you like in your password?  Please select a count between 8-128. ");
   
   if(charcount > 130 || charcount < 8 ){
   return window.alert("invalid response")}
 
   if(charcount < 128 || charcount > 8 ) 
     { var upperCase = window.confirm("Would you like Uppercase characters in your password? Type 1 for yes, type 0 for no.")
     var lowerCase = window.confirm("Would you like Lowercase characters in your password?  Type 1 for yes, type 0 for no. ")
    var numbers = window.confirm("Would you like numeric characters in your password? Type 1 for yes, type 0 for no.")
     var specialCharacter = window.confirm("Would you like special characters in your password? Type 1 for yes, type 0 for no.")

   }
   if(upperCase) {
    chars = chars + upperCaseChars
  }


  if(lowerCase) {
    chars = chars + lowerCaseChars
  }
  if(numbers) {
    chars = chars + numberChars
  }
  if(specialCharacter) {
    chars = chars + specialCharactersChars
  }
  console.log(chars)

  for (let i = 0; i < charcount; i++) {
    passwordReturned = passwordReturned + chars.charAt(Math.floor(Math.random()*chars.length))
    
  }
 return passwordReturned
  }
    
     







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
