class factoryFun {
    constructor(firstName,lastName,age) {
       this.firstName = firstName
       this.lastName = lastName
       this.age = age
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }

}

// factoryFun.prototype.getBirthYear = function() {  // this code is kept inside of the above class function
//     return new Date().getFullYear() - this.age
// }

// factoryFun.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }

const user1 = new factoryFun('Sumanth', 'S S', 25)
const user2 = new factoryFun('Sharath', 'S S', 20)