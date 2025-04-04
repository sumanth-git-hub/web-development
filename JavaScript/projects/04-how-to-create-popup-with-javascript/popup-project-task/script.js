const clickButton = document.querySelector('.news-letter-button')
const popupContainer = document.querySelector('.popup-container')
const closeButton = document.querySelector('.close-icon')
const overLay = document.querySelector('.overlay')
const mainPopup = document.querySelector('.popup')

clickButton.addEventListener('click',(e) => {
    popupContainer.classList.add('display-popup')
})
closeButton.addEventListener('click', (e) => {
    popupContainer.classList.remove('display-popup')
})
overLay.addEventListener('click', (e) => {
    popupContainer.classList.remove('display-popup')
})
mainPopup.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
})