const passwordBox = document.getElementById('password');
const length = 12;


const upperCaseLetters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters ='abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789'
const specialCharacters = '~!@#$&*'
const allCharsOnePlace = upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;
const generatePasswordButton = document.querySelector('.generate-password-button');
const copyPassword = document.getElementById('copy-icon')

function createPassword() {
    let password = '';
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    console.log(password)

    while (password.length < length) {
        password += allCharsOnePlace[Math.floor(Math.random() * allCharsOnePlace.length)]
    }
    passwordBox.value = password;
}

generatePasswordButton.addEventListener('click', () => {
    createPassword()
})

copyPassword.addEventListener('click', () => {
    passwordBox.select();
    // document.execCommand('copy') //this is deprecated practice so i have written the alternate code below to serve the same
    navigator.clipboard.writeText(passwordBox.value);
})