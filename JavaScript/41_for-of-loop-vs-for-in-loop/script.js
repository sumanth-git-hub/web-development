'use strict'
console.log('For of loop and For in Loop')

let fruits = ['Apple','Butter fruit','Banana','Gua','Grapes','Mango', 'Orange'];
console.log(fruits)

// just a for loop in javascript
for(let i = 0; i < fruits.length; ++i){
    console.log(`${i + 1}. ${fruits[i]}`)
}

console.log('//break the line that contain for of...')

for(const fruitVar of fruits){  // without variable also we can write but after adding the 'use strict' mode then we get the error 
    // debugger
    console.log(fruitVar);
}


// another example of for of loop

const userDetails = 'Sumanth'

for (let everyLetter of userDetails){
    console.log(everyLetter)
}


// for(const tastyFruits in fruits){
//     console.log(tastyFruits)
// }

const personalDetails = {
    myName: 'Sumanth',
    myAge: 25,
    address : 'Thirthahalli',
    pinCode: 577220
}
console.log(personalDetails)

// for(let crossCheckDetails of personalDetails) {  // if i use for of.. loop method here i use to get an error that is "personalDetails is not iterable" (Object s are not iterable) so for of loop method won't work here, i should use for in.. loop method
//     console.log(crossCheckDetails)
// }

// for(let crossCheckKey in personalDetails){  // by using for in we can 
//     console.log(crossCheckKey, ':', personalDetails[crossCheckKey])
// }

// we have another way to make object as a iterable that is written below

const personKeys = Object.keys(personalDetails)
for(const keys of personKeys) {
    console.log(keys,':',personalDetails[keys])
}




const personKey = Object.keys(personalDetails)
console.log(personKey)

const personValues = Object.values(personalDetails)
console.log(personValues)

const personEntries = Object.entries(personalDetails)
console.log(personEntries)





