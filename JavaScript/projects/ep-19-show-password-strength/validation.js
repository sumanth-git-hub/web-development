const showPassword = document.querySelector('.hide-show');
const copyPassword = document.querySelector('.copy-password');
const inputField = document.getElementById('user-password');
const strengthMessage = document.querySelector('.password-status');

// show / hide password
showPassword.addEventListener('click', (e) => {
    let eye = showPassword.children[0]
    eye.classList.toggle('fa-eye')
    if(eye.classList.contains('fa-eye')){
        showPassword.previousElementSibling.type = "text"
    }
    else {
        showPassword.previousElementSibling.type = "password"
    }
})

// copy the password
copyPassword.addEventListener('click', (e) => {
    alert('Password Copied Successfully')
    navigator.clipboard.writeText(inputField.value);

    if(inputField.value === ""){
        navigator.clipboard.writeText("No text to copy");
    }
    else {
        navigator.clipboard.writeText(inputField.value)
    }
});


// generating the password

const minLengthOfPassword = 12;
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "~!@#$&";
const allCharsOnePlace = upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;

function generatePassword() {
    createPassword()
}

function createPassword() {
    let password = "";

    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    

    while (password.length < minLengthOfPassword) {
        password += allCharsOnePlace[Math.floor(Math.random() * allCharsOnePlace.length)]
    }

    strengthMessage.style.display = "block"
    strengthMessage.textContent = "Password is Strong"
    inputField.parentElement.style.border = '2px solid green'
    console.log(password);
    return (inputField.value = password);
  }

  // password validation as "the length of the password should be more than 10 characters first letter should be capital and the password also should contain one special character"

  document.addEventListener("DOMContentLoaded", function() {
    inputField.addEventListener('input', checkPassword)
    console.log(checkPassword)
    function checkPassword() {
      const passwordContent = inputField.value;
      const validationMessage = validatePassword(passwordContent);
      strengthMessage.innerText = validationMessage;
      strengthMessage.style.display = "block"
      console.log(validationMessage)
    }
  
    function validatePassword(passwordContent) {
      const minLength = 12;
      const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/
  
      if(passwordContent.length < minLength){
          inputField.parentElement.style.border = '2px solid red'
          return "Password must be more than 12 characters long.";
      }
      if(passwordContent[0] !== passwordContent[0].toUpperCase()){ 
          return "The first letter of the password must be capital.";
      }
      //test() method used below 
      // if (!specialCharPattern.test(passwordContent)){
      //     return "Password must contain at least one special character.";
      // }
  
      // match method used below
      if(!passwordContent.match(specialCharPattern)){
          return "Password must contain at least one special character.";
      }
          inputField.parentElement.style.border = '2px solid green'
          return "Password is Strong.";
   
    }
  });


