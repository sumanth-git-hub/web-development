const userNameInput = document.querySelector('body > form > input')
const paragraph = document.querySelector('body > form > p')
const form = document.querySelector('body > form')

// userNameInput.addEventListener('click', () => { // click eventListener
//     console.log('Entered User Name')
// })
// userNameInput.addEventListener('dblclick', () => {  // double click eventListener
//     console.log('Entered User Name double click')
// })


// all about input event

/*
let inputValue
userNameInput.addEventListener('input', (event) => {  // input eventListener
    console.log(event.target.value)
    inputValue = event.target.value  // to store the input value in variable
    // console.log('Input Event Listener')
    paragraph.innerText = event.target.value
})
    */

// all about change event
/*
let inputValue 

userNameInput.addEventListener('change', (e)=> {
    console.log(e.target.value)
    inputValue = e.target.value // to store the input value in variable
    paragraph.innerText = inputValue
})
    */

// all about focus event

// let inputValues 

// userNameInput.addEventListener('focus', (event) => {
//     console.log(event)
//     console.log(event.type)
//     console.log(inputValues = event.target.value)
//     paragraph.innerText = inputValues
// })


// all about blur event

// let inputValue 

// userNameInput.addEventListener('blur', (event) => {
//     console.log(event)
//     console.log(event.type)
//     console.log(inputValue = event.target.value)
//     paragraph.innerText = inputValue
// })

// form.addEventListener('submit', (event) =>{
//     event.preventDefault()  // adding preventDefault() to avoid reloading the webpage after clicking on the submit button
//     console.log(event)
//     const findValues = new FormData(event.target)

//     for(const checkValues of findValues.entries()) {
//         console.log(checkValues)
//     }
//     console.log('form submitted successfully')
// })


// all about event.target and event.currentTarget

let printOnScreen

form.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log(event.currentTarget)
    console.log(event.target)
})