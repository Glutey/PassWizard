// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

// Function to prompt user for password options
function getPasswordOptions() {
    var length = prompt("Enter the desired length of your password (between 10 and 64 characters):");
    while (length < 10 || length > 64) {
        length = prompt("Enter the desired length of your password (between 10 and 64 characters):");
    }
    var hasLower = confirm("Include lowercase characters in your password?");
    var hasUpper = confirm("Include uppercase characters in your password?");
    var hasNumeric = confirm("Include numeric characters in your password?");
    var hasSpecial = confirm("Include special characters in your password?");
    while (!hasLower && !hasUpper && !hasNumeric && !hasSpecial) {
        alert("You must select at least one character type!");
        hasLower = confirm("Include lowercase characters in your password?");
        hasUpper = confirm("Include uppercase characters in your password?");
        hasNumeric = confirm("Include numeric characters in your password?");
        hasSpecial = confirm("Include special characters in your password?");
    }
    return {
        length: length,
        hasLower: hasLower,
        hasUpper: hasUpper,
        hasNumeric: hasNumeric,
        hasSpecial: hasSpecial
    }
}

// Function for getting a random element from an array
function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();
    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];
    if (options.hasLower) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
    if (options.hasUpper) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
    if (options.hasNumeric) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    }
    if (options.hasSpecial) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }

    for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);

        result.push(possibleCharacter);
    }


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




























// // Function to prompt user for password options
// function getPasswordOptions() {

// }

// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// // Function to generate password with user input
// function generatePassword() {

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
