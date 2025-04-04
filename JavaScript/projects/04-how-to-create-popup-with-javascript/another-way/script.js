const openPopup = document.querySelector('.button')
const popupContainer = document.querySelector('.popup')
const closeIcon = document.querySelector('.close-icon')
const entireBody = document.querySelector("body")
const mainContainer = document.querySelector('.stop-bubbling')
const overLay = document.querySelector('.overlay')



openPopup.addEventListener('click', (event) => {
    mainContainer.classList.add('open-popup')
})
closeIcon.addEventListener('click',() => {
    mainContainer.classList.remove('open-popup')
})
mainContainer.addEventListener('click', (event) => {
    mainContainer.classList.remove('open-popup')
})
popupContainer.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
})
