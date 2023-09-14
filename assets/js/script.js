// Declare variable "generateBtn" and assign value to target "generate button"
var generateBtn = document.querySelector("#generate");
var password;                          //variable to store the generated password
var char;                              //variable to store the length of password requested by user
var lower_case;                        //variable to store if lower case alpha charactesr are included in password
var upper_case;                        //variable to store if upper case alpha characters are included in password
var numbers;                           //variable to store if numbers are included in password
var special_chars;                     //variable to store if special characters are included in password
const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";     //constant to store uppercase alpha characters
const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";     //constant to store lower case alpha characters
const numberChar = "1234567890";                        //constant to store numbers
const specialChar = " !'#$%&()*+,-./:;<=>?@[\]^_`{|}~"; //constant to store special characters
var characters = "";                   //Variable to store available characters for password generator to use

// Function to Write password to the #password field
function writePassword() {
  console.log("engaged writePassword function"); //[HL] logging
  //Declare "password" variable and assign value of "generatePassword()"
  //Does this also end up calling the function?
  console.log("calling generatePassword function") ;           //[HL] logging
 // Function to generate random string
  //var password = generatePassword();
  generatePassword();
  //Delcare "passwordText" variable and assign target of "#password" box in html
  var passwordText = document.querySelector("#password");

  
  //Define value of "passwordText" to equal "password" generated by "generatePassword()" function
  passwordText.value = ("Generated password is: " + password);
  //Stop execution of functionC
  return;
}


function generatePassword() {
  //Call charlength function to check password length and validate input
  charLength();
  //Call charinclusion function to check characters to include and validate input
  charInclusion();
  //Call assemblePassword to assemble the password based on parameters determined by charLength() and charInclusion ()
  assemblePassword();
  console.log ("We've reached the end: " + password)   //[HL] Logging



//----------------------------------------//
//Check password length and validate input//
//----------------------------------------//
  function charLength() {
  //Prompt Character legth Characters//
    char = window.prompt("How many characters would you like (8-128)?","Integers only please");
    console.log ("1 Char value = " + char + ", Datatype: " + typeof char)
  //Validate "char" is between 8-128 characters inclusive//
      if (char <8 || char >128) {
        window.alert("Please pick a number between 8-128 (inclusive)");
        console.log ("2 Char value = " + char + ", Datatype: " + typeof char)
        charLength();
      }
  //Validate value of "char" is integer (remainder = 0 when divided by 1)
      else if (char % 1 !== 0) {
        window.alert("Please only use integers");
        console.log ("3 Char value = " + char + ", Datatype: " + typeof char)
        charLength();               
      }
  //Validate "char" data type is number (Nan = Not a number)
      else if (isNaN(char)) {
        window.alert("Please only submit numeric values");
        console.log ("4 Char value = " + char + ", Datatype: " + typeof char)
        charLength();        
      }
    return;
  };      
      
//------------------------------------------//
//Check characters to include and validation//
//------------------------------------------//
  function charInclusion() {
  //Prompt user for characters to include in password//
    lower_case = window.confirm("Lower case?");
    upper_case = window.confirm("Upper case?");
    numbers = window.confirm("Numbers?");
    special_chars = window.confirm("Special characters?");
  // Validate that at least one character type has been included
      if (lower_case === false && upper_case === false && numbers === false && special_chars === false) {
      window.alert("You have answered no to all characters, at least one must be included")
      charInclusion();
      }
  
    console.log("Characters: " + char);                          //[HL] logging
    console.log("Lower case: " + lower_case);                    //[HL] logging
    console.log("Upper case: " + upper_case);                    //[HL] logging
    console.log("Numbers: " + numbers);                          //[HL] logging
    console.log("Special Characters: " + special_chars);         //[HL] logging
  
    console.log ( "Characters before building: " + characters)      //[HL] logging
    
   
  
  // Add included character sets to "charIncluded" variable
  characters = ""   //reset characters to blank slate before appending
  // Append lower case constant to "characters" if use responds with true
  
    if (lower_case = true) {
      characters += lowerCaseChar ;
    } else {};
  // Append upper case constant to "characters" if use responds with true
    if (upper_case = true) {
      characters += upperCaseChar;
    }  else {};
  // Append numbers constant to "characters" if use responds with true  
    if (numbers = true) {
      characters += numberChar;
    }  else {};
  // Append special characters constant to "characters" if use responds with true
    if (special_chars = true) {
      characters += specialChar;
    }  else {};
    
    console.log("After building characters: " + characters)              //[HL] logging
      return;
  };
}

//---------------------//
//Assemble the password//
//---------------------//

function assemblePassword() {
  //const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz1234567890 !'#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  console.log ("Charcters: " + characters)
  console.log("Characters length: " + characters.length)
  //reset password variable to blank before appending new characters
  password = "";
  //for loop to randomly select characters for "const characters"
  for (var i=0; i < char; i++ ) {
  //randomly append characters to password from the constant "characters"
  //random calculation based on "Math.random" generating a value between 0 and 1
  //random number is multiplied by length of the characters available and rounding to nearest integer
  //this is repeated in a loop until the number of random characters meets the value of "char"
    password += characters.charAt(Math.round(Math.random() * characters.length));
  }
  console.log("Generated password = " + password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//console.log(Math.random() + " test")
//console.log(Math.random().toString(36));

