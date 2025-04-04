/* const herName = 'Suma'
let herFullName = herName

herFullName = herFullName + ' S S'
console.log(herFullName) */

const fruits = ['Mango', 'Apple', 'Banana', 'dragon fruit']
console.log(fruits)
// const myFruits = fruits
// myFruits.push('Grapes','Butter fruit', 'Sapota','Pomegranate')
// myFruits
// console.log(myFruits)


/*const myFruits = []

Object.assign(myFruits, fruits) */

const myFruits = [...fruits]
myFruits.push('Water melon', 'Grapes', 'Gua', 'spread operator')

console.log(myFruits)

// copying by using spread operator method


// const myFruits = [].concat(fruits)
// copying by using concat method


// const myFruits = fruits.slice()
// copying by using slice method

const userDetails = {
    userName : 'Sumanth',
    userSecName : 'S S',
    address : {
        city: 'thirthahalli',
        pinCode: 577220,
        isNearByCity : false,
    },
    moreInfo : ['The above mentioned statement is true']
}

userDetails.moreInfo.push('Consider this too')
console.log(userDetails)

// const updateUserDetails = userDetails

// updateUserDetails.userName = 'Sharath'

// console.log(updateUserDetails)

/*const userDetails1 = {

}

Object.assign(userDetails1, userDetails)
console.log(userDetails1)

userDetails1.userName = 'Sharath'*/

// const userDetails1 = {... userDetails}
// // this practice is called spread operator 
// userDetails1.userName = 'Sharath'

const userDetails1 = {...userDetails}
userDetails1.address.city = 'Mandagadde'
console.log(userDetails1)

/*const userDetails1 = {}

Object.assign(userDetails1, userDetails)
userDetails1.address.city = 'Mandagadde'
console.log(userDetails1) */

// the Object.assign() and spread operator is called shallow copy method

