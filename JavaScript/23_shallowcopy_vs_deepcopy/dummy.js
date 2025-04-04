const fruits = ['Banana','Pomegranate','Sapota','Orange','Watermelon']
console.log(fruits)

// const myFruits = fruits
// myFruits.push('Gua','Grapes','Mango')
// console.log(myFruits)

/*const myFruits = []
Object.assign(myFruits, fruits)*/

const myFruits = [...fruits]

// const myFruits = [].concat(fruits)

// const myFruits = fruits.slice()

myFruits.push('Gua','Grapes','Mango','Kiwi','Dragon fruit')
console.log(myFruits)
console.log(fruits)


// created a object and nested array inside of it and checked shallow copy method

const myDetails = {
    name : 'Sumanth',
    secondName : 'S S',
    education : 'Civil Engineering',
    dateOfBirth : 25,
    address : ['thirthahalli','mandagadde','karnataka'],
    moreInfo : {
        maritalStatus : 'Single',
        isWebAvailable : false
    }
}

myDetails.phoneNumber = 245824
console.log(myDetails)

const yesMyDetails = {...myDetails}

// const yesMyDetails = []
// Object.assign(yesMyDetails, myDetails)

yesMyDetails.moreInfo.maritalStatus = 'Unmarried'
yesMyDetails.address[1] = 'shimoga'
yesMyDetails.name = 'Sharath'
console.log(yesMyDetails)