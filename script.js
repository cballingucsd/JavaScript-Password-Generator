// Assignment Code
var generateBtn = document.querySelector("#generate");

//define global variables 
var password = [];

//first prompt user for length of password 8-128 characters
function generatePassword(){
var pwLength = parseInt(prompt("How many characters long should the password be?" ));

//condition for userInputs outside of allowable range
if (pwLength< 8 || pwLength>128){
  alert("Password must be greater than 8 characters and less than 129 character");
  pwLength = parseInt(prompt("How many characters long should the password be?" ));
  }

//second prompt to include lowercase, uppercase, numeric and/or special characters
var upCase = confirm("Do you want to include uppercase letters?");
var nums = confirm("Do you want to include numbers?");
var spChars = confirm("Do you want to include special characters?");

//create arrays of optional passwords inputs
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var withUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var withNums = '1234567890'.split('');
var withSpecs = '!@#$%^&*-=_+,./<>?'.split('');

//define empty array variable for password
var pwArray =[];

//conditions for userInputs to create password arrays
if(upCase){
  //if uppercase is true
  if(nums){
    //if uppercase and numbers is true
    if(spChars){
      //if uppercase numbers and special chars is true
      pwArray = alphabet.concat(withUpper,withNums,withSpecs);
    }
    else{
      //if uppercase and numbers is true and special chars is false
      pwArray = alphabet.concat(withUpper,withNums);
    }
  }
  else{
    //if uppercase is true and numbers is false
    if(spChars){
      //if uppercase and special chars is true and numbers is false
      pwArray = alphabet.concat(withUpper, withSpecs);
    }
    else{
      //if uppercase is true and numbers and special chars is 
      pwArray = alphabet.concat(withUpper);
    }
  }
}
else{
  //if uppercase is false
  if(nums){
    //if numbers is true and uppercase is false
    if(spChars){
      //if numbers and special chars is true and uppercase is false
      pwArray = alphabet.concat(withNums,withSpecs);
    }
    else{
      //if numbers is true and uppercase and special chars are false
      pwArray = alphabet.concat(withNums);
    }
  }
  else{
    //if uppercase and numbers is false
    if(spChars){
      //if special chars is true and uppercase and numbers is false
      pwArray = alphabet.concat(withSpecs);
    }
    else{
      //if uppercase numbers and special chars is false
      pwArray = alphabet;
    }
  }
}

//create random string with length pwLength from array pwArray
//define variable outside of forLoop
var index = 0;
var pwArraySize = pwArray.length; 

//for loop to random select each password index
for(i=0; i < pwLength; i++) {
  index = Math.floor(Math.random()*pwArraySize);
  password[i] = pwArray[index];
}

//create a sting from password
password = password.join('');
}


// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
