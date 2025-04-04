// understand DOM is object type

function sayHello(){
    console.log('Hello World!!')
}
console.log(sayHello)  // similar like when you open as document on console
console.dir(sayHello) // similar like when you open console.dir(document) on console

console.log('Type of Document is',typeof document)
console.dir(document)

console.log(document.body.children)

// print the h1 in console in object format

console.dir(document.children[0].children[1].children[0]) // accessed the h1 in very common way

// document.body.children[0]  // accessed in short

// console.dir(document.body.children[0])

console.log(document.body.children[0].innerText = 'Web Development')  // way to manipulate the content of the webpage

console.log(document.body.children[1].innerHTML = '<i>Hello World!!</i>')  // way to manipulate the content of the webpage with html changes


function checkImage(){
    document.body.children[4].src = 'https://static.autox.com/uploads/2023/03/Volkswagen-Virtus-Carbon-Steel-Grey.jpg'
}
console.log(checkImage())  // when call this function the car image presents on first image place

const letsTry = document.body.children[12]
letsTry.innerHTML = 'Why Copy rights &copy;'
console.log(letsTry, 'This is accessed through an variable')

document.body.children[6].src = 'https://d2m3nfprmhqjvd.cloudfront.net/blog/20230427122453/Volkswagen-Virtus-1-jpg.webp' // This change bring virtus on your webpage


document.body.children[10].src = 'https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2305673-volkswagen-virtus-review-smartselect_20220508143648_instagram.jpg' 

console.dir(document.body.parentElement)

scroll({
    top: 110,
    left: 0,
    behavior: "smooth"
})

window.print()