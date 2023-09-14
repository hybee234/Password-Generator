
var generateBtn = document.querySelector("#generate");  //Variable targeting the "Generate Password" button on HTML
var password = "";                                      //variable to store the generated password
var charLength ="";                                         //variable to store the length of password requested by user
var lower_case_flag;                                    //variable to store if lower case alpha charactesr are included in password
var upper_case_flag;                                    //variable to store if upper case alpha characters are included in password
var numbers_flag;                                       //variable to store if numbers are included in password
var special_chars_flag;                                 //variable to store if special characters are included in password
var characters = "";                                    //Variable to store available characters for password generator to use
const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";     //constant to store uppercase alpha characters
const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";     //constant to store lower case alpha characters
const numberChar = "1234567890";                        //constant to store numbers
const specialChar = " !'#$%&()*+,-./:;<=>?@[\]^_`{|}~"; //constant to store special characters

//--------------------------------------------------//
//Calls the other 3 functions to create the password//
//------------function charLengthCheck()------------//
//-------------function charInclusion()-------------//
//-----------function assemblePassword()------------//
//--------------------------------------------------//
function generatePassword() {
  console.clear();
  charLengthCheck(); //Determine password length + validation
  charInclusion(); //Determine characters to include + validation
  assemblePassword();//Assemble the password based on parameters
  //Publish password onto webpage
  var passwordText = document.querySelector("#password"); //target the text area with id "password"
  passwordText.value = (password);                        //update value of id to variable "password" (i.e. show it)
  return;
}

//--------------------------------------//
//Determine password length + validation//
//--------------------------------------//
  function charLengthCheck() {
  //Prompt Character legth Characters//
    charLength = window.prompt("How many characters would you like your password to be? \n(Passwords can be 8 to 128 characters long)");
  //console.log ("charLength value = " + charLength + ", Datatype: " + typeof charLength)          //[HL] logging
  //Validate "charLength" is between 8-128 characters inclusive//
      if (charLength <8 || charLength >128) {
        console.log ("Error: charLength = " + charLength + " (Out of Range)");      //[HL] logging
        window.alert("Please enter a number between 8-128 (inclusive)");
        charLengthCheck();
      }
  //Validate "charLength" data type is number (Nan = Not a number)
      else if (isNaN(charLength)) {
        console.log ("Error: CharLength = " + charLength + " (Not a Number)");      //[HL] logging
        window.alert("Please only submit numeric values");
        charLengthCheck();        
      }
  //Validate value of "charLength" is integer (remainder = 0 when divided by 1)
      else if (charLength % 1 !== 0) {
        console.log ("Error: charLength = " + charLength + " (Not an Integer)");   //[HL] logging
        window.alert("Please only use integers");
        charLengthCheck();               
      }
//    console.log ("charLength value = " + charLength);          //[HL] logging
    return;
  };      
      
//--------------------------------------------//
//Determine characters to include + validation//
//--------------------------------------------//
function charInclusion() {
//Prompt user for characters to include in password//
  lower_case_flag = window.confirm("Would you like to include Lower Case characters in your password??");
  upper_case_flag = window.confirm("Include Upper Case characters in your password?");
  numbers_flag = window.confirm("Include Numbers in your password?");
  special_chars_flag = window.confirm("Include Special characters in your password??");
// Validate that at least one character type has been included
    if (lower_case_flag === false && upper_case_flag === false && numbers_flag === false && special_chars_flag === false) {
    console.log("Error: User has not selected any character types")         //[HL] logging
    window.alert("You have answered no to all character type, please select at least one")
    charInclusion();
    }
  console.log("")
  console.log("***Parameters are***")
  console.log("CharLength: " + charLength);                              //[HL] logging
  console.log("Lower Case Flag: " + lower_case_flag);                    //[HL] logging
  console.log("Upper Case Flag: " + upper_case_flag);                    //[HL] logging
  console.log("Numbers Flag: " + numbers_flag);                          //[HL] logging
  console.log("Special Characters Flag: " + special_chars_flag);         //[HL] logging
  console.log("")
  console.log("***Determining Characters to include***")
  console.log("Included Characters - Before: " + characters)               //[HL] logging
  
  window.alert("You have selected: \n\nPassword Length: " + charLength + "\nInclude Lower Case? " + lower_case_flag + "\nInclude Upper case? " + upper_case_flag + "\nInclude Numbers? " + numbers_flag + "\nInclude Special Characters? " + special_chars_flag + "\n\nClick OK to see your password!");
// Add included character sets to "characters" variable
  characters = ""   //reset characters to blank slate before appending
  // Append lower case constant to "characters" if use responds with true
    if (lower_case_flag === true) {
      characters += lowerCaseChar ;
    } 
  // Append upper case constant to "characters" if use responds with true
    if (upper_case_flag === true) {
      characters += upperCaseChar;
    }  
  // Append numbers constant to "characters" if use responds with true  
    if (numbers_flag === true) {
      characters += numberChar;
    }  
  // Append special characters constant to "characters" if use responds with true
    if (special_chars_flag === true) {
      characters += specialChar;
    }  
  
  console.log("Included Characters - After: " + characters)              //[HL] logging
return;
};


//---------------------//
//Assemble the password//
//---------------------//
function assemblePassword() {
  console.log("")
  console.log("*** Assemling the password ***")
  console.log("Assembling with these Characters: " + characters)                         // Console log characters included
  console.log("Assembling an " + charLength + " character password using the " + characters.length + " characters available")                // Console log number of characters included
  password = "";    //reset password variable to blank before appending new characters
  //for loop to randomly select characters from "characters"
  for (var i=0; i < charLength; i++ ) {
  //Append characters to "password" from the constant "characters", characters are selected by position in "characters"
  //Positon is randomly calculated based on "Math.random" generating a value between 0 and 1
  //Random number is multiplied by length of the characters available, rounding to nearest integer
  //This is repeated in a loop until the number of random characters meets the value of "charLength"
    password += characters.charAt(Math.round(Math.random() * characters.length));
  }
  console.log("Assembled password = " + password)
}

// Add click event listener to "Generate Password" button - function "generatePassword" is called on click
generateBtn.addEventListener("click", generatePassword);

