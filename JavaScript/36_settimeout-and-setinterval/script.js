// setTimeout(`
// console.log("Sumanth S S"); 
// console.log("Sharath S S");`, 2000);

//setTimeout is asSynchronous
const timer1 = setTimeout (`console.log('Hello-2')`, 1000);
const timer2 = setTimeout (`console.log('Hello-4')`);  // this one is going to be print first (in setTimeout elements) because it dose not have timer

// const timer3 = setTimeout (`console.log('Hello-6')`, 6000);

// const timer3 = setTimeout (a, 3000, 'sumanth', {username: 'baba'},['array present'],1999);  // higher order function (no need of adding parenthesis with call back function)

const timer3 = setTimeout (a, 3000)
// clearTimeout(timer1)  // used this method to stop the above used function to print


// writing callback for higher order function below

function a() {
    // console.log(arguments[3]) // argument is the keyword in js to request the specific call back
    console.log('Hello World!')
}

setTimeout(function() { 
    // debugger
    console.log('anonymous function in setTimeout')
}, 4000)

setTimeout(function c() {  //named function in setTimeout
    console.log('Named function in setTimeout')
}, 4000)
// setInterval code written below

const timerInterval = setInterval (`console.log('Hello-SetInterval')`, 5000);
const timerInterval2 = setInterval(s,6000)

function s() {
    console.log('higher order functionSetInterval')
}

clearInterval(timerInterval)  // used this method to stop the above used function to print
clearInterval(timerInterval2) // used this method to stop the above used function to print



console.log(`i'll printed top because i am not under timer`)  //Synchronous method