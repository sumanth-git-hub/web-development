const userNameInput = document.querySelector('.user-name-capture')
const userAgeInput = document.querySelector('.user-age-capture')

const printName = document.querySelector('.name-element')
const printAge = document.querySelector('.age-element')

/*
userNameInput.addEventListener('input',(event) => {
    // console.log(event.target.value)
    localStorage.setItem('userName', event.target.value)

    printName.innerText = localStorage.getItem('userName')
})

userAgeInput.addEventListener('input',(event) => {
    localStorage.setItem('userAge', event.target.value)

    printAge.innerText = localStorage.getItem('userAge')
})


printName.innerText = localStorage.getItem('userName')

printAge.innerText = localStorage.getItem('userAge')
*/


// const userData = {
//     userName: '',
//     userAge: '',
// }


const userData = JSON.parse(localStorage.getItem('userData'))
console.log(userData)

userNameInput.addEventListener('input',(event) => {
    // console.log(event.target.value)
    userData.userName = event.target.value
    localStorage.setItem('userData', JSON.stringify(userData))

    printName.innerText = event.target.value
})

userAgeInput.addEventListener('input',(event) => {
    userData.userAge = event.target.value

    localStorage.setItem('userData', JSON.stringify(userData))

    printAge.innerText = event.target.value
})

if(userData.userName){
    printName.innerText = userData.userName
}
if(userData.userAge){
    printAge.innerText = userData.userAge
}


/*
userNameInput.addEventListener('input',(event) => {
    localStorage.setItem('userName', event.target.value)

    printName.innerText = localStorage.getItem('userName')
})

userAgeInput.addEventListener('input',(event) => {

    localStorage.setItem('userAge', event.target.value)

    printAge.innerText = localStorage.getItem('userAge')
})

printName.innerText = localStorage.getItem('userName')
printAge.innerText = localStorage.getItem('userAge')

*/