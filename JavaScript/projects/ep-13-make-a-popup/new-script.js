
const firstStep = document.querySelector('.cta-button');
const formSubmitButton = document.querySelector('.action-button');
const formSection = document.querySelector('.form-section');
const closeModal = document.querySelector('.flex-section span');
const thanksModal = document.querySelector('.thanks-modal');
const closeButton   = document.querySelector("#first-name");
let allInputs = document.querySelectorAll('form input');
const firstSection = document.querySelector('.submit-parent')



firstStep.addEventListener('click', (e) => {
    formSection.classList.add('open-modal')
});
closeModal.addEventListener('click', (e) => {
    formSection.classList.remove('open-modal')
})
formSubmitButton.addEventListener('click', (e) => {
    if(allInputs[0,3].value === ""){
        alert('Fill the Required Details')
    }
    else{
        formSection.classList.remove('open-modal')
        thanksModal.classList.add('open-modal')
        firstSection.style.display = 'none'
    }
    
})
document.querySelector("body > div > section > div > span").addEventListener('click', () => {
    thanksModal.classList.remove('open-modal')
    firstSection.style.display = 'block'
})
// closeModal.addEventListener('click', (e) => {
//     thanksModal.classList.remove('open-modal')
// })