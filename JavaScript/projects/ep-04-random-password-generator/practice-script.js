const length = 12;
const passwordBox = document.getElementById("password");
const copyPassword = document.getElementById("copy-icon");
const copyEmailId = document.getElementById("copy-icon-email");
const emailBox = document.getElementById("email-id");
const generatePasswordButton = document.querySelector(
  ".generate-password-button"
);
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "~!@#$&";
const dot = ".";
const at = "@";
const domain = "gmail.com";
const allCharsOnePlace =
  upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;

const emailIdCombination = lowerCaseLetters + numbers;

function createPassword() {
  let password = "";

  password +=
    upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  password +=
    lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  while (password.length < length) {
    password +=
      allCharsOnePlace[Math.floor(Math.random() * allCharsOnePlace.length)];
  }
  //   console.log(password);
  return (passwordBox.value = password);
}

generatePasswordButton.addEventListener("click", () => {
  createPassword();
  createEmailId();
});

function createEmailId() {
  let emailId = "";
  emailId +=
    lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];

  while (emailId.length < length) {
    emailId +=
      emailIdCombination[
        Math.floor(Math.random() * emailIdCombination.length)
      ] +
      emailIdCombination[
        Math.floor(Math.random() * emailIdCombination.length)
      ] +
      emailIdCombination[
        Math.floor(Math.random() * emailIdCombination.length)
      ] +
      emailIdCombination[
        Math.floor(Math.random() * emailIdCombination.length)
      ] +
      emailIdCombination[
        Math.floor(Math.random() * emailIdCombination.length)
      ] +
      emailIdCombination[
        Math.floor(Math.random() * emailIdCombination.length)
      ] +
      emailIdCombination[
        Math.floor(Math.random() * emailIdCombination.length)
      ] +
      emailIdCombination[
        Math.floor(Math.random() * emailIdCombination.length)
      ] +
      numbers[Math.floor(Math.random() * numbers.length)] +
      emailIdCombination[
        Math.floor(Math.random() * emailIdCombination.length)
      ] +
      lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)] +
      dot +
      at +
      domain;
  }

  return (emailBox.value = emailId);
}

copyPassword.addEventListener("click", () => {
  passwordBox.select();
  // document.execCommand('copy')
  navigator.clipboard.writeText(passwordBox.value);
  console.log(passwordBox.value);
});

// copyEmailId.addEventListener('click', () => {
//     emailBox.select()
//     navigator.clipboard.writeText(emailBox.value)
//     console.log(emailBox.value)
// })

function justCopy() {
  // by using "onclick" function on html element serves the same
  emailBox.select();
  navigator.clipboard.writeText(emailBox.value);
  console.log(emailBox.value);
}
