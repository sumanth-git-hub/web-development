// console.log('welcome to JavaScript');

// nn ss bb u

// let a = null
// let b = 360
// let c = 'JavaScript Beginner'
// let d = Symbol ('here is the symbol')
// let e = false
// let f = BigInt ('345') + BigInt ('5')
// let g 
// console.log(a,b,c,d,e,f,g)
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)
// console.log(typeof g)


console.log('Welcome to JavaScript')

// primitive data type categories

// nn ss bb u



let a = 44
let b = null
let c = 'sting'
let d = Symbol('a symbol here')
let e = true
let f = BigInt('355') + BigInt('5')
let g

console.log(a, b, c, d, e, f)

console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g)



// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)
// console.log(typeof g)


// non primitive data types is Objects in JavaScript

// const item  =
// {
//     "Sumanth":false,
//     "Gautam":false,
//     "Nishant":76,
//     "Rithesh": undefined
// }
// console.log(item["Sumanth"])

// const item = {
//     "Sumanth": true,
//     "Sharath": false,
//     "sachin": 100,
//     "Manju": undefined
// }
// console.log(item["Sumanth"])

const item2 = {
    'storeName' : 'Sri Krishna Stores',
    address : {
    storeLocation : undefined,
    storePinCode : 577220,
    storeAccess : true, 
    moreInfo : {
        deliveryTime : '30 mins'
    }  
    }
}
item2.address.moreInfo.homeDeliveryAvailable = true
console.log(item2)
item2.address.moreInfo.minimumOrderValue = '₹ 2000'

const myName = 'Sumanth'

const userName1 = ''
const userName2 = ''

const userDetails = {
    firstName: 'Sumanth',
    'last-name': 'S S', 
    Sumanth : 'Developer',
    address : {
    city: 'Shimogga', 
    pinCode: null, 
    state: undefined,
    moreInfo : {
        highEducation : 'Civil Engineering',
        passOutYear : 2017,
    }
    }
}
// address of the userDetails @396177
console.log(userDetails.firstName)
console.log(userDetails['last-name'])
console.log(userDetails[myName])
console.log(userDetails['first' + 'Name'] + ' ' + userDetails['last-name'])
console.log(userDetails.age = 25)
console.log(userDetails['is-student'] = !true)
console.log(userDetails.address.city = 'Thirthahalli')
console.log(userDetails.address.moreInfo['passOutYear'])
userDetails.address.moreInfo.grade = 'A+'

const userDetails1 = {
    firstName: 'Suma',
    lastName: 'S S', 
    // age: 26, 
    // education: 'diploma', 
    // city: 'Thirthahalli', 
    // pinCode: null, 
    // state: undefined
}
// address of the userDetails1 @396179
