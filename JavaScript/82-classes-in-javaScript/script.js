
// function getBirthYear() {  // we achieved polymorphism here but this get stored globally which is not required so the same function used below
//   return new Date().getFullYear() - this.age
// }

/*

function factoryFun(firstName, lastName, age){
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear: factoryFun.commonMethods.getBirthYear
  }
  return user
}


factoryFun.commonMethods = {  // used .commonMethods to avoid data storage in global scope
  getBirthYear() {
    return new Date().getFullYear() - this.age
  }
}

const user1 = factoryFun('Sumanth', 'S S', 25)
const user2 = factoryFun('Sharath', 'S S', 20)

*/

// function sayHello() {
//   console.log('Hello World!!')
//   return 'Hello World!!'
// }
// console.log(typeof new sayHello())


function factoryFun(firstName, lastName, age) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age
}

factoryFun.prototype.getBirthYear = function() {  // storing the getBirthYear Function inside the prototype will help you to show the data with inheritance
  return new Date().getFullYear() - this.age
}

factoryFun.prototype.getFullName = function() {  // to avoid multiple times of using prototype we will use classes in next session
  return this.firstName + ' ' + this.lastName
}

const user1 = new factoryFun('Sumanth', 'S S', 25)
const user2 = new factoryFun('Sharath', 'S S', 20)

console.log(user1.__proto__.getBirthYear)
console.log(user1.getBirthYear())
console.log(user1.getFullName())