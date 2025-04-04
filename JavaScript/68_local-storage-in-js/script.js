const nameElement = document.querySelector('.name-element')
const userNameInput = document.querySelector('.user-name-capture')
const userAgeInput = document.querySelector('.user-age-capture')
const ageElement = document.querySelector('.age-element')



// nameElement.innerText = localStorage.userName
// nameElement.innerText = localStorage.getItem('userName')

/*
userNameInput.addEventListener('input',(event) => {
    // console.log(event.target.value)
    // localStorage.userName = event.target.value  // it's also serves the similar like below but not recommended
    localStorage.setItem('userName', event.target.value)  // recommended way to set the value
    // nameElement.innerText = event.target.value
    nameElement.innerText = localStorage.getItem('userName') // recommended way to get the value
})

userAgeInput.addEventListener('input',(event) => {
    localStorage.setItem('userAge', event.target.value)
    ageElement.innerText = localStorage.getItem('userAge')
})
*/

// const userData = {
//     userName: '',
//     userAge: '',
// }

// console.log(userData)

const userData = JSON.parse(localStorage.getItem('userData')) || {}  // used to execute with the help of above code
console.log(userData)

userNameInput.addEventListener('input', (event) => {
    userData.userName = event.target.value

    localStorage.setItem('userData', JSON.stringify(userData))

    nameElement.innerText = event.target.value
})

userAgeInput.addEventListener('input',(event) => {
    userData.userAge = event.target.value

    localStorage.setItem('userData', JSON.stringify(userData))

    ageElement.innerText = event.target.value
})


// nameElement.innerText = userData.userName
// ageElement.innerText = userData.userAge

if(userData.userName){  // by adding this if condition we can avoid undefined value result on page after clearing the local storage
    nameElement.innerText = userData.userName
}
if(userData.userAge){
    ageElement.innerText = userData.userAge
}