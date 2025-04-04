'use strict' // used to avoid declaring the variables without naming them

// username = 'Sumanth S S'  // example of declaring the variables without naming them

// Destructuring with an Array

console.log('// Destructuring with an Array')

const carsArray = ['Virtus','Slavia','City','Verna']
console.log(carsArray)
// const dCarsArray0 = carsArray[0]
// console.log(dCarsArray0)
// const dCarsArray1 = carsArray[1]
// console.log(dCarsArray1)
// const dCarsArray2 = carsArray[2]
// console.log(dCarsArray2)
// const dCarsArray3 = carsArray[3]
// console.log(dCarsArray3)
// const dCarsArray4 = carsArray[4]
// console.log(dCarsArray4)

console.log('Written value with destructure')
const [dCarsArray0,dCarsArray1,dCarsArray2,dCarsArray3,dCarsArray4] = carsArray
// const [,dCarsArray1] = carsArray  // when we add comma that consider as the number of values passing in this example 'Slavia' is printed value
console.log(dCarsArray0) // it servers the similar results as above commented code
console.log(dCarsArray1)
console.log(dCarsArray2)
console.log(dCarsArray3)
// console.log(dCarsArray4)  // when there is no presence of value inside the element it shows 'Undefined'


console.log('Extracting the values of an array as Object')
const {0: volksWagen, 2: honda} = carsArray  // destructuring an Array as a object
console.log(volksWagen)
console.log(honda)



// Destructuring with an Object

console.log('// Destructuring with an Object')

const clientDetails = {
    // 'client-name': 'Sumanth',
    clientName: 'Sumanth',
    clientAge: 25,
    clientAddress: {
        city: 'Thirthahalli',
        state: 'Karnataka',
        pincode: 577220,
    }
}
console.log(clientDetails)
console.log(clientDetails.clientAddress) // normal way of accessing the properties of the object

const hisName = clientDetails.clientName 
console.log(hisName)  // normal way of accessing the properties of the object

const {clientName: copyName, clientAge: copyAge, clientAddress : copyAddress}  = clientDetails // used Destructuring method to access the properties of the object
console.log(copyName)  
console.log(copyAge)  
console.log(copyAddress) 
console.log(copyAddress.city)  
console.log(copyAddress.state)  
console.log(copyAddress.pincode)  


// another way to extract the inside properties of the object (Extracted the address out of the object) called multi level destructuring

const {clientAddress} = clientDetails
console.log(clientAddress)

const {clientAddress: {city: homeTown}} = clientDetails
console.log(homeTown)  

const {clientAddress: {state}} = clientDetails
console.log(state)  

const {clientAddress: {pincode: changePinCode}} = clientDetails
console.log(changePinCode)


// destructuring an array and object in function

console.log('How to Destructure an Array and Object in Function')

function checkDestructure([a,b,japanHonda]){  // 'City' will be displayed as return because of ,, commas are considered as a values
    console.log([a,b,japanHonda])
    return japanHonda
}
console.log(checkDestructure(carsArray))

function checkDestructure1({2: loveHonda, 1: loveSkoda, 0: loveVolksWagen}){  // 'City' will be displayed because of ,, commas are considered as a values ('Here destructured the array as a object')
    console.log({0: loveVolksWagen, 1: loveSkoda, 2: loveHonda})
    return loveSkoda
}
console.log(checkDestructure1(carsArray))

// object extracted inside the function

function destructureObject(userDetails){
    return userDetails
}
console.log(destructureObject(clientDetails))

function destructureObject1({clientName,clientAge,clientAddress,clientAddress: {city},clientAddress: {state},clientAddress: {pincode}}){
    console.log({clientName,clientAge,city,state,pincode})
    return  clientAddress
}
console.log(destructureObject1(clientDetails))