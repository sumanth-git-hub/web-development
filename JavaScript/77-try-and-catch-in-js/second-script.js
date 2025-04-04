// we got tge error on console by saying as await is only valid in async functions and the top level bodies of modules

const viewPromise = await fetch("https://httpbin.org/delay/5")
const showData = await viewPromise.json()
console.log('Great!! check the network tab to see the response')


// const testFunction = () => {
//     fetch('https://httpbin.org/delay/5')
//     .then(res => res.json())
//     .then(console.log)

//     console.log('Hello used then keyword here')
// }
// testFunction()
