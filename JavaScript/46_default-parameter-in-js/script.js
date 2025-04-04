console.log('ES6 Updated Feature to Add the Default Parameter')

const checkForMultiply = function(a,b = 1){ // new way to initialize the default value in parameter
    return a * b
}
console.log(checkForMultiply(10))


const rollADies = function(rollNow = 10){
    return Math.floor(Math.random() * rollNow)
}
console.log(rollADies())

// setInterval(()=>{
//     console.log(rollADies())
// },1000)

const userDetails = ((userName = 'Sumanth',UserAge) => {
    console.log(`Hello the User Name is ${userName} and he is ${UserAge} years old`)
})
userDetails(undefined,25)