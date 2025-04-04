const cardVar = document.querySelector('.card')


function sayYes(){
    console.log('Hello World!!')
}

const newClick = () => {
    console.log('Namasthe JavaScript')
    return 'Namasthe JavaScript'
}
newClick()

// cardVar.onclick = sayYes  // one way to execute the event listener but it display only event listener on the element
// cardVar.onclick = newClick

/*
cardVar.addEventListener('click', sayYes)  // recommended method to execute the event listener because we can add multiple event listener on one element
cardVar.addEventListener('click', (secondClick) => {
    console.log('Hello World!! Second Click')
})
cardVar.addEventListener('click', function(){ // inline function called
    console.log('Hello World!! Third Click')
})
cardVar.addEventListener('click', newClick) // outside declared function called
*/

let counts = 1  // to bring the numbers inside the cards

/*

cardVar.addEventListener('click', ()=>{  // executing the eventListener by using createElement
     const createNewCard = document.createElement('div')
     createNewCard.classList.add('card')
     createNewCard.innerText = counts
     counts++
     document.querySelector('.container').append(createNewCard)
     console.log(createNewCard)
})

*/

cardVar.addEventListener('click', ()=>{  // execute the same as above by by using cloneNode
     const createNewCard = cardVar.cloneNode(false)
     createNewCard.classList.remove('uniqueIncrement')
     createNewCard.innerText = counts
     counts++
     document.querySelector('.container').append(createNewCard)
     console.log(createNewCard)
})


