const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const card = document.querySelector('.card')
const h3 = document.querySelector('h3')

// document.querySelector("body > h1").innerText = 'Hello World!!'

// container.appendChild(h1) // cut and paste the h1 inside the div (container)

const cloneH1 = h1.cloneNode(true) // to copy the h1
const cloneCard = card.cloneNode(true)

// container.appendChild(h1.cloneNode(true)) //to copy and paste the h1 inside the div (container)

for(let i = 2; i <= 100; ++i){  // created 99 cards under container using for loop
    const newCard = card.cloneNode()
    newCard.innerText = i
    container.appendChild(newCard)
}

// const h2 = document.querySelector('h2')

// container.appendChild(h2)

container.append('Created textNode using append')  // we can pass the string inside the append

// container.appendChild('Created textNode using appendChild') //we can't pass the string inside the appendChild [Failed to execute 'appendChild' on 'Node'] to avoid this we should follow the below method

const newTextNode = document.createTextNode('Created textNode using createTextNode & appendChild')

container.appendChild(newTextNode)

container.appendChild(document.querySelector('h2')) // appending the h2 inside the container in the html local file it is located inside the <section> but in browser it is inside the container

// h3 is located inside the <div> in local HTML file but in browser it is appending inside the <section>



document.querySelector('body > section').append('textNode',cloneH1, cloneCard) // we can add multiple elements and TextNode inside the append


document.querySelector('body > section').appendChild(h3,newTextNode) // newTextNode is get ignored we can't add multiple elements inside the appendChild 
