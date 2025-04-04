console.log('Practice of methods in JavaScript')

// a normal function (Higher Order function)

function normalFunction(elements){
    console.dir(elements)
    elements()
}

function callBackfunction(){
    console.log('Higher Order Function')
}
callBackfunction.level = 'easy'
callBackfunction.understand = 'true'
normalFunction(callBackfunction)


// A normal object
const normalMethod = {
    userName: 'Sumanth',
    userAge: 25,
    moreInformation: ['array nested inside the object'],
    contactDetails: {
        mobileNo: 7348988867,
        whatsapp: 'true',
        homeDelivery: !!0
    }
}
normalMethod.address = 'Thirthahalli'
console.log(normalMethod)


// methods in javascript

const methodsFunction = {
    E: 2.718281828459045,

    add: function(a,b){
        return a + b
    },
    subtract: function(c,d){
        return c - d
    },
    multiplication: function(e,f){
        return e * f
    },
    division(g,h){
        return g/h
    },
    exponential(i,j){
        return(i ** j)
    } 
}
console.log(methodsFunction)

console.log(methodsFunction.exponential(4,4))