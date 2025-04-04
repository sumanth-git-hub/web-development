const createContainer = document.createElement('div')
createContainer.classList.add('container')
document.querySelector('.clickable-component').append(createContainer)
// createContainer.style.backgroundColor = "orange"
// createContainer.style.cssText = `
//     background-color: sienna;
//     padding: 10px;
// `

const placingClickButtonOut = document.querySelector('.changes-done-at-last')
const createCard = document.createElement('div')
createCard.classList.add('main-button')
createCard.setAttribute('title','click to create card')
createCard.innerText = '+'
// createContainer.append(createCard)  //placed 'main-button' out of the container to execute Event Delegation
placingClickButtonOut.append(createCard) 

let counts = 1
let clickCounts = 1
createCard.addEventListener('click', (clickToCreate)=> {
    const createNewCard = document.createElement('div')
    createNewCard.innerText = counts++
    createNewCard.classList.add('card')
    createContainer.append(createNewCard)

    console.log(`clicked ${clickCounts++} time`)

    // createNewCard.addEventListener('mouseenter',(removeCard) => {  // we can't go with this method because it add the eventListener on each child which is not recommend so we are going to add the eventListener on parent 

    //     createNewCard.remove()
    //     console.log(`card removed`)
    //     console.log(removeCard)
    // })
    // console.log(clickToCreate.target)
})

createContainer.addEventListener('click', (e) => {
    if(e.target !== createContainer){
        e.target.remove()
        console.log(e.target,' card removed')
    }
})

// const cardsList = document.querySelectorAll('.card')

// cardsList.forEach((card) => {
//     console.log(card)
//     card.addEventListener('click', ()=> {
//         card.remove()
//     })
// })