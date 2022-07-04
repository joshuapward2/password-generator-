// Assignment code here
window.alert("Welcome to my password generator! Please follow the prompts to generate yours...")



var passwordLength = charcount;

var upperCase = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
var lowerCase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var specialCharacters =[",!,@,#,$,%,^,&,*,(,),"];
var numbers = ["1,2,3,4,5,6,7,8,9,0"];




function howManyChars(){
  var charcount= prompt("How many character would you like in your password?  Please select a count between 8-128. ");
   
   if(charcount > 130 || charcount < 8 ){
   window.alert("invalid response")}
 
   else(charcount < 128 || charcount > 8 ) 
     { var upperCase = window.prompt("Would you like Uppercase characters in your password? Type 1 for yes, type 0 for no.")
     var lowerCase = window.prompt("Would you like Lowercase characters in your password?  Type 1 for yes, type 0 for no. ")
    var numbers = window.prompt("Would you like numeric characters in your password? Type 1 for yes, type 0 for no.")
     var specialCharacter = window.prompt("Would you like special characters in your password? Type 1 for yes, type 0 for no.")

   }
  }
    
     

var upperCase = function(){

  if(upperAnswer > 0) {
    
  }}

  

var lowerCase = function(){

  Math.floor(Math.random()*10)+1
}



var numbers = function(){
  
  Math.floor(Math.random()*10)+1
}



var specialCharacters = function(){
  
  Math.floor(Math.random()*10)+1
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
