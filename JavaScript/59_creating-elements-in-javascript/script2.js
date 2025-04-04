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


// for(let i = 1; i <=100; ++i){  // another way to add the element with the help of innerHtml
//     const createDiv = document.createElement('div')  // creating a div
//     createDiv.classList.add('image-container')

//     const myHTML = `
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     `
//     createDiv.innerHTML = myHTML
//     container.append(createDiv)
// }




// let myHTML = ``   // another way to execute the same 

// for(let i = 1; i <= 100; ++i) {
//     myHTML += `
//     <div class="image-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p> 
//         </div> `
// }
// container.innerHTML = myHTML