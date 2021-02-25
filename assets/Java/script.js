// Assignment Code
 var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// variable arrays
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var pwdArray = [];

// Decleration Variables

var confirmLength = "";
var confirmUpper;
var confirmLower;
var confirmSpecial;
var confirmNumbers;



// prompt to find out how many characters in Password Length
function generatePassword () {
  var confirmLength = prompt("Please choose password length between 8 and 128");


// loop if no paramaters are met

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert ("Password length must be between 8 and 128, Try again");
    var confirmLength = (prompt("Please choose password length between 8 and 128"));
  }

  alert(`Your password will have ${confirmLength} characters`);

  var confirmUpper = confirm("Do you want UpperCase letters? Okay for yes, cancel for no");
  var confirmLower = confirm("Do you want LowerCase letters? Okay for yes, cancel for no");
  var confirmSpecial = confirm("Do you want Special Characters? Okay for yes, cancel for no");
  var confirmNumbers = confirm("Do you want Numbers? Okay for yes, cancel for no");

  while (confirmUpper === false && confirmLower === false && confirmSpecial === false && confirmNumbers === false) {	
	  alert("Please choose at least one option");
    var confirmUpper = confirm("Do you want UpperCase letters? Okay for yes, cancel for no");
    var confirmLower = confirm("Do you want LowerCase letters? Okay for yes, cancel for no");
    var confirmSpecial = confirm("Do you want Special Characters? Okay for yes, cancel for no");
    var confirmNumbers = confirm("Do you want Numbers? Okay for yes, cancel for no");
}

  if (confirmUpper) {
    pwdArray.push(upperLetter);
}

  if (confirmLower) {
    pwdArray.push(lowerLetter);
}

  if (confirmSpecial) {
    pwdArray.push(specialChar);
}

  if (confirmNumbers) {
    pwdArray.push(numbers);
}






}