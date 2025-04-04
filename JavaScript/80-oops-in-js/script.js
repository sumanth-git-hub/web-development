// const user = {
//   firstName: 'Sumanth',
//   lastName: 's s',
//   age: 25,
//   getAgeYear:  function() {  // also called as a encapsulation 
//     console.log(new Date().getFullYear() - user.age)
//     return new Date().getFullYear() - user.age
//   }
// }
// user.getAgeYear()

// new Date().getFullYear() - user.age //the way to find the date and year

// function getAgeYear(age) {  // placing this function inside the above written object is called object oriented programming  // also called as a abstraction
//   console.log(new Date().getFullYear() - age)
//   return new Date().getFullYear() - age
// }
// getAgeYear(user.age)

// Factory function created to create and return new object

function createUser(firstName,lastName,age) {
  const user = {
    firstName,
    lastName,
    age,
  //    getAgeYear: function() {
  //   return new Date().getFullYear() - user.age
  // },
  getAgeYear() {  // new way to write the function
    return new Date().getFullYear() - user.age
  }
}
   return user
}
createUser()

const user1 = createUser('Sumanth', 'S', 25)
const user2 = createUser('Sharath', 'S S', 20)


const arr1 = [1,2]
const arr2 = [3,4]

console.log(arr1.pop === arr2.pop) // they are stored in the same address so it's showing the value as true

// user1.getAgeYear === user2.getAgeYear  // these values are stored in different path of the javascript which is not recommended in javascript to avoid this we should use the constructor function



