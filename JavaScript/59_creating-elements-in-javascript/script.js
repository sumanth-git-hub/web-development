// images without numbering

const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
// const firstImage = document.querySelector('img')

// for(let i = 1; i <= 100; ++i){
//     const cloneImage = firstImage.cloneNode(true)
//     cloneImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.appendChild(cloneImage)
// }

// const createParagraph = document.createElement('p')
// createParagraph.innerText = 'Hello World!!'

// container.appendChild(createParagraph) 

// createParagraph.id = ('setAttribute') // adding the id


// createParagraph.classList.add('jFilePara','newOne') // adding the class attribute



for(let i =1; i <= 100; ++i){
    const createImgContainer = document.createElement('img')
    // container.appendChild(createImgContainer)
    createImgContainer.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    // const cloneImage = createImgContainer.cloneNode(true)
    // cloneImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.appendChild(createImgContainer)
}
