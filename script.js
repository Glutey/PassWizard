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

  // Initialize variables for password criteria
  let length = 0;
  let lowerCaseCharacters = false;
  let upperCaseCharacters = false;
  let numeric = false;
  let special = false;
// 
  


  // Function to prompt user for password options
  function getPasswordOptions() {
    // Prompt for password length
    while (length < 10 || length > 64) {
      length = prompt("Enter the desired length of your password (between 10 and 64 characters): ");
      if (length < 10 || length > 64) {
        alert("Password length must be between 10 and 64 characters!");
      }
    }
    // Prompt for character types
    lowerCaseCharacters = confirm("Do you want lowercase characters in your password?");
    upperCaseCharacters = confirm("Do you want UPPERCASE characters in your password?");
    numeric = confirm("Include numeric characters in your password?");
    special = confirm("Include special characters in your password?");
    // End.







    
    // chat GPT code:
     // Validate that at least one character type is selected
     while (!lowerCaseCharacters && !upperCaseCharacters && !numeric && !special) {
      alert("You must select at least one character type!");
      lowercase = confirm("Include lowercase characters in your password?");
      uppercase = confirm("Include uppercase characters in your password?");
      numeric = confirm("Include numeric characters in your password?");
      special = confirm("Include special characters in your password?");
    }
    // End.

     


    // alert
    prompt 
    // confirm length of password should be >=10 && <= 64
    // alert={Character type lowerCasedCharacters, uppercase, numeric, special characters};
  
  }
  





  // Function for getting a random element from an array
  function getRandom(arr) {
  
  }
  // chat GPT code:
  // Generate the password
  let password = "";
  let characters = "";
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numeric) {
    characters += "0123456789";
  }
  if (special) {
    characters += "$@%&*";
  }

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  // End.



  // Function to generate password with user input
  function generatePassword() {
  
  }

  

  // Chat GPT code:
   // Display the generated password in an alert or on the page
   alert("Your generated password is: " + password);
   // or
   document.querySelector("#password-field").textContent = password;
  //  End.




  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);


// 
// 
// 
// 
// 

// // Add an event listener to the button
// document.querySelector("#generate-password-button").addEventListener("click", function() 

  






  










  

 

 