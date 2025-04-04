console.log('All about spread operator ES6 feature')

const arrayForTest = [4,8,12,16]
const secondTestArray = [20,24,28,32,36,40]

console.log(arrayForTest.concat(secondTestArray))  //old method to add the one or more array

const joinedArray = [...arrayForTest,...secondTestArray,44,48]  // used spread operator to combine the elements of 2 array
console.log(joinedArray)

const whyNotString = 'Sumanth'
console.log(...whyNotString)

const userDetails = {
    name: 'Sumanth',
    age: 25,
    place: 'Thirthahalli'
}
userDetails.moreinfo = 'visit site' // old way to add elements to object

const updateUserDetails = {...userDetails, graduation: false} // by using spread operator we can also add the elements
console.log(updateUserDetails)


const argumentKey =  (...nums) => {
    let additional = 0
    for(let i = 0; i< nums.length; ++i){
        console.log(additional,nums[i])
        additional += nums[i]
    }
    return additional
}
console.log(argumentKey(2,4,6,8,10))

console.log(argumentKey(...joinedArray)) // the same above calculation is implemented here as well

console.log(argumentKey(...whyNotString))