const openModalButton = document.getElementById('open-modal');
const formSection = document.querySelector('.new-form');
const closeModal = document.querySelector('.close-sec');
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');
const userName = document.getElementById('user-name');
const userMobileNo = document.getElementById('user-contact-number');
const userEmailId   = document.getElementById('user-email-id');
const userMessage = document.getElementById('validate-message');
const submitButton = document.getElementById('submit-button');

openModalButton.addEventListener('click', () => {
    openModalButton.classList.add('hide-button')
    formSection.classList.add('close-form')
})

closeModal.addEventListener('click', (e) => {
    openModalButton.classList.remove('hide-button')
    formSection.classList.remove('close-form')
})

userName.addEventListener('keyup',(e) => {
    // const userData = e.target.value
    console.log(userName.value);
    submitError.innerText = ""

    if(userName.value.length == '0'){
        nameError.innerText = 'Name is required!'
        return false;
    }
    if(!userName.value.match(/^[A-Za-z]*\s{1}[A-Za-z]/)){
        nameError.innerText = 'Write full name'
        return false;
    }
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true;
});

userMobileNo.addEventListener('keyup', (e) => {
    submitError.innerText = ""
    console.log(userMobileNo.value)
    if(userMobileNo.value.length == '0'){
        phoneError.textContent = "Phone number is required"
        return false;
    }
    if(userMobileNo.value.length !== 10){
        phoneError.textContent = "Phone number should be 10 digits"
        return false;
    }
    if(!userMobileNo.value.match(/^[6-9]{1}[0-9]{9}$/)){
        phoneError.textContent = "Enter valid phone number"
        return false;
    }
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true;
    });

userEmailId.addEventListener('keyup', (e) => {
    submitError.innerText = ""
    if(userEmailId.value.length == 0){
        emailError.innerText = "Email is required"
        return false;
    }
    if(!userEmailId.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerText = "Enter valid email"
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
});

userMessage.addEventListener('keyup', (e) => {
    submitError.innerText = ""
    let required = 30;
    let leftOver = required - userMessage.value.length;

    if(leftOver > 0){
        messageError.innerHTML = leftOver + "more characters required"
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
});

// submitButton.addEventListener('click', (e) => {
//     if(!userName.value || !userMobileNo.value || !userEmailId.value || !userMessage.value){
//         submitError.innerText = "Kindly fix the above error";
//     }
// })

function validateForm(){
    if(!userName.value){
        nameError.innerText = 'Name is required!'
    }
    else if(!userMobileNo.value){
        phoneError.textContent = "Phone number is required"
    }
    else if(!userEmailId.value){
        emailError.innerText = "Email is required"
    }
    else if(!userMessage.value){
        messageError.textContent = "Message is required"
    }
    if(!userName.value || !userMobileNo.value || !userEmailId.value || !userMessage.value){
        submitError.innerText = "Kindly fix the above error";
        return false;
    }
}
