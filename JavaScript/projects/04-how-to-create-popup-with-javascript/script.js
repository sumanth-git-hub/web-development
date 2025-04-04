const openPopup = document.querySelector('.button')
const popupContainer = document.querySelector('.popup')
const closeIcon = document.querySelector('.close-icon')
const entireBody = document.querySelector("body")
const mainContainer = document.querySelector('.stop-bubbling')
const overLay = document.querySelector('.overlay')


// openPopup.addEventListener('click',(event) => {
//     popupContainer.classList.add('open')
// })


openPopup.addEventListener('click', (event) => {
    mainContainer.classList.add('open-popup')
})
closeIcon.addEventListener('click',() => {
    mainContainer.classList.remove('open-popup')
})
overLay.addEventListener('click', () => {
    mainContainer.classList.remove('open-popup')
})