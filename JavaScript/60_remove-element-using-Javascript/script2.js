// images with numbering

const container = document.querySelector('.container')

// document.querySelector('body > div > div').classList.add('image-container')

for(let i = 1; i <=100; ++i){  // defined the for loop with JS
    const createDiv = document.createElement('div')  // creating a div
    createDiv.classList.add('image-container')

    const createImage = document.createElement('img')
    createImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const createParagraph = document.createElement('p')
    createParagraph.innerText = i

    createDiv.append(createImage,createParagraph)
    container.appendChild(createDiv)
}

// removing elements starts from here

const varForRemove = document.querySelector("body > div > div:nth-child(3)") // we can store this in variable and remove by using the 'remove()' term
varForRemove.remove()

const removeChildVar = document.querySelector('body > div > div:nth-child(5)') // we can also delete the element by using 'removeChild()' term but the above one is concise method compared to this
removeChildVar.parentElement.removeChild(removeChildVar)

document.querySelector('body > div > div:nth-child(4)').remove() // without storing the variable also we can remove


const h1 = document.querySelector('body > h1')
// h1.remove() // by using .remove() the element is get deleted from the js memory

