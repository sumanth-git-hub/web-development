const createMainSection = document.createElement('main')
document.querySelector('body').append(createMainSection)

const h1 = document.createElement('h1')
h1.innerText = 'Event Simulation in JavaScript'
createMainSection.append(h1)

const createCOntainer = document.createElement('div')
createCOntainer.classList.add('container')
createMainSection.append(createCOntainer)

const createCard = document.createElement('div')
createCard.classList.add('card','uniqueIncrement')
createCard.innerText = '+'
createCOntainer.append(createCard)

let counts = 1

createCard.addEventListener('click',()=> {
    const createNewCard = createCard.cloneNode(true)
    createNewCard.innerText = counts++
    createNewCard.classList.remove('uniqueIncrement')
    createCOntainer.append(createNewCard)
})

// for(let i =0; i <=99; ++i){
//     createCard.click()
// }

const setIntervalId = setInterval(()=>{
    if(counts >99){
        clearInterval(setIntervalId)
    }
    createCard.click()
},10)

// creating the focus and blur on input element by using JS

const createInput = document.createElement('input')
createInput.setAttribute('type','text')
createMainSection.append(createInput)

// createInput.focus()

setTimeout(()=>{
    createInput.focus()
},2000)

setTimeout(()=>{
    createInput.blur()
},4000)


const createNewForm = document.createElement('form')
createMainSection.append(createNewForm)

const createUserNameInput = document.createElement('input')
createUserNameInput.setAttribute('type','text')
createNewForm.append(createUserNameInput)

const createButton = document.createElement('button')
createButton.innerText = 'Button'
createNewForm.append(createButton)

const cleartimeout = setTimeout(() => {
    // if(counts > 2){
    //     clearTimeout(cleartimeout)
    // }
createNewForm.submit()
console.log('form submitted')
},4000)


clearTimeout(cleartimeout)


const createResetButton = document.createElement('button')
createResetButton.setAttribute('type','reset')
createResetButton.innerText = "Reset"
createResetButton.style.margin = '10px'
createNewForm.append(createResetButton)

const clearResetTime = setTimeout(() => {
createNewForm.reset()
console.log('Reset')
},4000)
