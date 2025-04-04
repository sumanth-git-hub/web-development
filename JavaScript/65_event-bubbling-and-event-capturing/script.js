const mainSection = document.createElement('section')
mainSection.classList.add('main-section')
document.querySelector('body').append(mainSection)

const heading = `
<h1>Event Bubbling and Event Capturing in JavaScript</h1>
`
mainSection.innerHTML = heading

const layerNumberThree = document.createElement('div') 
layerNumberThree.classList.add('third-layer')
mainSection.append(layerNumberThree)

const layerNumberTwo = document.createElement('div')
layerNumberTwo.classList.add('second-layer')
layerNumberThree.append(layerNumberTwo)

const layerNumberOne = document.createElement('div')
layerNumberOne.classList.add('first-layer')
layerNumberTwo.append(layerNumberOne)

const paragraph = `
    <p style="cursor: pointer">Click Here</p>
`
layerNumberOne.innerHTML = paragraph

/*

window.addEventListener('click', (e) => {
    // e.stopImmediatePropagation() // to stop
    console.log('6. clicked on Window Layer')
}, {capture: true,  once: true})
document.addEventListener('click', (e) => {
    console.log('5. clicked on Document Layer')
}, {capture: true,  once: true})
document.body.addEventListener('click', (e) => {
    console.log('4. clicked on Body Layer')
}, {capture: true,  once: true})
layerNumberThree.addEventListener('click', (e) => {
    // e.stopImmediatePropagation()  // used to stop bubbling
    console.log('3. clicked on 3rd Layer')
}, {capture: true,  once: true})
layerNumberTwo.addEventListener('click', (e) => {
    console.log('2. clicked on 2nd Layer')
}, {capture: true,  once: true})
layerNumberOne.addEventListener('click', (e) => {
    console.log('1. clicked on 1st Layer')
}, {capture: true,  once: true})  // once: true is used to set only once it capture

*/

layerNumberOne.addEventListener('click', (event) => {
    console.log('Clicked on 1st Layer')
}, {capture: true, once: true})
layerNumberTwo.addEventListener('click', (event) => {
    console.log('Clicked on 2nd Layer')
}, {capture: true, once: true})
layerNumberThree.addEventListener('click', (event) => {
    console.log('Clicked on 3rd Layer')
}, {capture: true, once: true})
document.body.addEventListener('click', (event) => {
    event.stopImmediatePropagation()
    console.log('Clicked on body Layer')
}, {capture: true, once: true})