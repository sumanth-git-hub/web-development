const showPassword = document.querySelector('.hide-show');
const copyPassword = document.querySelector('.copy-password');
const inputField = document.getElementById('user-password');
const strengthMessage = document.querySelector('.password-status');

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

// length rule for validation

  inputField.addEventListener('input' , (e) => {
    if(inputField.value.length > 0){
        strengthMessage.style.display = "block"
    }
    else {
        strengthMessage.style.display = "none"
        
    }
    if(inputField.value.length < 4){
        strengthMessage.textContent = "Password is weak"
        inputField.parentElement.style.border = '2px solid red'
    }
    else if(inputField.value.length >= 4 && inputField.value.length < 8){
        strengthMessage.textContent = "Password is Medium"
        inputField.parentElement.style.border = '2px solid yellow'
    }
    else if (inputField.value.length >= 8){
        strengthMessage.textContent = "Password is Strong"
        inputField.parentElement.style.border = '2px solid green'
    }
  })

//condition for password validation
/*
  document.addEventListener('DOMContentLoaded', function() {
    inputField.addEventListener('input', passDetails);

    function passDetails() {
        const passValue = inputField.value;
        const validationMessage = validatePassword(passValue);
        strengthMessage.textContent = validationMessage;
    }
    
    function validatePassword(passValue){
        const minLength = 12;
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        strengthMessage.style.display = "block"
    
        if(passValue.length < minLength){
            inputField.parentElement.style.border = '2px solid red'
            return "The length of the password should be more than 12 characters"
        }
        if(passValue[0] !== passValue[0].toLocaleUpperCase()){
            inputField.parentElement.style.border = '2px solid red'
            return "Your password must contain capital letter in the beginning"
        }
        if(!passValue.match(specialCharPattern)){
            
            return "Add any special character to strength the password"
        }
        else {
            inputField.parentElement.style.border = '2px solid green'
            return "The password is strong"
        }
        
    }
  })
*/