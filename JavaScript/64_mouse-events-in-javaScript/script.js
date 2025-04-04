const container = document.querySelector('.container')

const createDiv = document.createElement('div')
createDiv.classList.add('card', 'uniqueIncrement')
createDiv.innerText = '+'
container.append(createDiv)

let counts = 1

const h1 = document.querySelector('h1')

// click event


// createDiv.addEventListener('click', ()=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)
//     console.log('click element')
// })

// double click event


// createDiv.addEventListener('dblclick', ()=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)
//     console.log('click element')
// })


// mouse down event

// createDiv.addEventListener('mousedown', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// mouse up event


// createDiv.addEventListener('mouseup', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// mouseenter event

// createDiv.addEventListener('mouseenter', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// mouseleave event

// createDiv.addEventListener('mouseleave', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })

// mousemove event

// createDiv.addEventListener('mousemove', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// mouseout event

// createDiv.addEventListener('mouseout', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// mouseover event

// createDiv.addEventListener('mouseover', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// wheel event

// createDiv.addEventListener('wheel', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// scroll event

// document.addEventListener('scroll', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })



// all about touch events (works on mobile devices)

// touchstart event

// createDiv.addEventListener('touchstart', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// touchend event

// createDiv.addEventListener('touchend', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// touchmove event

// createDiv.addEventListener('touchmove', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// drag event  // works only for desktop

// h1.addEventListener('drag', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })


// pointer move event  // it works for both the devices 

// createDiv.addEventListener('pointermove', (event)=>{
//     const createNewCard = document.createElement('div')
//     createNewCard.classList.add('card')

//     createNewCard.innerText = counts++

//     container.append(createNewCard)

//     console.log(event)
// })

// pointerenter move event 

createDiv.addEventListener('pointerenter', (event)=>{
    const createNewCard = document.createElement('div')
    createNewCard.classList.add('card')

    createNewCard.innerText = counts++

    container.append(createNewCard)

    console.log(event)
})




