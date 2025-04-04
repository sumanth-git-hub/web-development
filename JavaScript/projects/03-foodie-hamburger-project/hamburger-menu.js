/*
const hamburgerIconContainer = document.querySelector('.hamburger-menu-icon-container')
const headerContent = document.querySelector('.header-content')
const closeMenu = document.querySelector('.close-icon')
const navigateTop = document.querySelector('.navigate-top')
const mainSection = document.querySelector('.for-mobile-response')
const navigationalLinks = document.querySelector('.navigation-links')



hamburgerIconContainer.addEventListener('click', (event) => {
    event.stopPropagation()
    headerContent.classList.add('menu-open')
})

// headerContent.addEventListener('click', (event) => {
//     event.stopPropagation()
// })

navigationalLinks.addEventListener('click', (event) => {
    event.stopPropagation()
})

closeMenu.addEventListener('click', (event) => {
    headerContent.classList.remove('menu-open')
})

navigateTop.addEventListener('click', (event) => {
    mainSection.scrollTo(0,0)
})

window.addEventListener('click',(event) => {
    headerContent.classList.remove('menu-open')
})

*/


const clickableMenu = document.querySelector('.hamburger-menu-icon-container')
const headerContent = document.querySelector('.header-content')
const closeMenu = document.querySelector('.close-icon')
const navigationalLinks = document.querySelector('.navigation-links')
const stopBubbling = document.querySelector('.stop-bubbling')
const navigateTop = document.querySelector('.navigate-top')
const mainSection = document.querySelector('.for-mobile-response')

clickableMenu.addEventListener('click',(event) => {
    headerContent.classList.add('menu-open')
})

stopBubbling.addEventListener('click', (event) => {
    event.stopPropagation()
})

closeMenu.addEventListener('click', (event) => {
    headerContent.classList.remove('menu-open')
})
window.addEventListener('click', (event) => {
    headerContent.classList.remove('menu-open')
})

navigateTop.addEventListener('click', (event) => {
    mainSection.scrollTo(0,0)
})


