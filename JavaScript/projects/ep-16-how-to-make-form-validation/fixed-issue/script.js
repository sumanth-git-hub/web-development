const openModalButton = document.getElementById('open-modal');
const formSection = document.querySelector('.new-form');
const closeModal = document.querySelector('.close-sec');
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');
const headingSection = document.querySelector('.heading-section')

openModalButton.addEventListener('click', (e) => {
    openModalButton.classList.add('hide-button');
    formSection.classList.add('close-form')
    headingSection.style.display = "none"
});
closeModal.addEventListener('click', (e) => {
    openModalButton.classList.remove('hide-button');
    formSection.classList.remove('close-form')
    headingSection.style.display = "block"
});



function validateName() {
    const userName = document.getElementById('user-name').value;
    console.log(userName);
    submitError.textContent = ""

    if(userName.length == 0){
        nameError.textContent = "Name required"
        return false;
    }
    if(!userName.match(/^[A-Za-z]*\s{1}[A-Za-z]/)){
        nameError.textContent = "Enter the valid name"
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateNumber() {
    const userMobileNo = document.getElementById('user-contact-number').value;
    submitError.textContent = ""

    if(userMobileNo.length == 0){
        phoneError.textContent = 'Phone number required'
        return false;
    }
    if(!userMobileNo.match(/^[6-9]{1}[0-9]{9}$/)){
        phoneError.textContent = 'Enter the valid mobile number'
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateEmail(){
    submitError.textContent = ""
    const userEmailId   = document.getElementById('user-email-id').value;
    if(userEmailId.length == 0){
        emailError.textContent = "Email is required"
        return false;
    }
    if(!userEmailId.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.textContent = "Enter valid email address"
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateUserContent() {
    submitError.textContent = ""
    const userMessage = document.getElementById('validate-message').value;
    let required = 30;
    let leftOver = required - userMessage.length;

    if(leftOver > 0){
        messageError.innerHTML = leftOver + " more characters required"
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}


function validateForm() {
    submitError.textContent = ""

    if(!validateName() || !validateNumber() || !validateEmail() || !validateUserContent()){
        submitError.textContent = "Please fix the above error"
        return false;
    }
    document.querySelector("body > div").innerHTML = `<div class="thanks-modal">
    <i class="fa-solid fa-circle-check check-mark"></i>
    <i class="fa-solid fa-xmark modal-close-icon"></i>
    <p>Thanks for submitting the details</p>
    </div>`

    const thankYou = document.querySelector('.modal-close-icon');
    console.log(thankYou);

    thankYou.addEventListener('click', () => {
        location.reload()
    })
}

