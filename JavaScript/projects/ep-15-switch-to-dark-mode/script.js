let allQuestions = document.querySelectorAll('.question-section');
let darkMode = localStorage.getItem('dark-theme');
const switchButton = document.querySelector('.navigation-bar');

allQuestions.forEach((eachClick) => {
    eachClick.addEventListener('click', (e) => {
        // console.log(eachClick.nextElementSibling)

        eachClick.nextElementSibling.classList.toggle('display-answer')
        eachClick.classList.toggle('add-color')
    })
})
/*
switchButton.addEventListener('click', (e) => { 
    document.querySelector("body").classList.toggle('dark-theme')
    darkMode = localStorage.getItem('dark-theme');
    if(switchButton.children[0].classList.contains('fa-moon')){
        switchButton.children[0].classList.add('fa-sun')
        switchButton.children[0].classList.remove('fa-moon')
        darkMode.localStorage.setItem('darkMode', 'active')
    } else {
        switchButton.children[0].classList.remove('fa-sun')
        switchButton.children[0].classList.add('fa-moon')
        darkMode.localStorage.setItem('darkMode', null)
    }
})
    */

function enableDarkMode() {
    document.body.classList.add('dark-theme');
    localStorage.setItem('dark-theme', 'active')
    switchButton.children[0].classList.add('fa-sun')
    switchButton.children[0].classList.remove('fa-moon')
}
function disableDarkMode() {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('dark-theme', null);
    switchButton.children[0].classList.remove('fa-sun')
    switchButton.children[0].classList.add('fa-moon')
}
if(darkMode === "active") enableDarkMode();

switchButton.addEventListener('click', (e) => {
    darkMode = localStorage.getItem('dark-theme');
    darkMode !== "active" ? enableDarkMode(): disableDarkMode();  // another way to right if condition

    // if(darkMode !== "active"){  //normal way to write the if condition
    //     enableDarkMode()
    // }
    // else {
    //     disableDarkMode()
    // }
})