console.log('All about Rest Parameter in JavaScript')

function firstRestParam(){  // argument keyword used
    let bringSum = 0
    for(let i = 0; i < arguments.length; ++i) {
        bringSum += arguments[i]
        console.log(i,bringSum, arguments[i])
    }
    return bringSum
}
console.log(firstRestParam(2,4,6,8,10))

const spreadOperatorVar = [2,4,6,8,10]


function secondRestParam(a,b,...parameter1){  // same code but used rest parameter here to define the function
    console.log('parameter :',parameter1)
    console.log('a =',a,'b =',b)
    let bringSum = 0
    for(let i = 0; i < parameter1.length; ++i) {
        bringSum += parameter1[i]
        // console.log(i,bringSum, parameter[i])
    }
    return bringSum
}
// console.log(secondRestParam(2,4,6,8,10))
console.log(secondRestParam(...spreadOperatorVar,16)) // used spread operator to call back the function (above it contains the values and it is spreading those values here to call back)


// use reduce to the function

const checkSpread = [10,20,30,40,50,60,70,80,90,100]

function thirdRestParam(...parameter){  // same code but used rest parameter here to define the function
    console.log('parameter :',parameter)
    return parameter.reduce((accumulator,current) => accumulator + current)
}
console.log(thirdRestParam(...checkSpread))

// converting the arguments into array
console.log('// converting the arguments into array')

const checkSpread2 = [10,20,30,40,50]

function fourthRestParam(){  
    console.log('parameter :',[...arguments]) // by keeping the arguments inside the array with dots will convert the argument into array
    return [...arguments].reduce((accumulator,current) => accumulator + current)
}
console.log(fourthRestParam(...checkSpread2))

// another way to covert the argument into array

function fifthRestParam(){
    console.log('parameters :',Array.from(arguments)) // by using the arguments inside the Array.from() will convert the argument into array
    return Array.from(arguments).reduce((accumulator,current) => accumulator + current)
}
console.log(fifthRestParam(...checkSpread))


const spreadOperator = [11,22,33,44,55]
console.log(spreadOperator)
console.log(...spreadOperator)

function secondRestParameter(a,b,...parameterUnique){
    console.log('parameter :',parameterUnique)
    console.log('a =',a,'b =',b)
    let bringSumm = 0
    for(let i = 0; i < parameterUnique.length; ++i) {
        bringSumm += parameterUnique[i]
    }
    return bringSumm
}
console.log(secondRestParameter(...spreadOperator))
