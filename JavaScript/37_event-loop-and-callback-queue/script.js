console.log('Event Loop and Callback Queue')

//asynchronous code

setTimeout(function(){
    console.log('written inside the setTimeout')
})

//synchronous code
console.log('Hello World!- 1')

function writeFun() {
    console.log('Function in JavaScript')
}

for(let i = 0; i <= 4; ++i) {
    console.log(i)
}
writeFun()
console.log('Hello World!- 2')


// the setTimeout (asynchronous) function passes through web APIs and call back the queue  