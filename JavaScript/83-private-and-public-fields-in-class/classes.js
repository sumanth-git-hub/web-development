class factoryFun {
    #age
    constructor(firstName,lastName,age) {
       this.firstName = firstName
       this.lastName = lastName
       this.#age = age
    }

    // hi = 'Hello WOrld!!'  // public field
    #hi = 'Hello WOrld!!' 

    getBirthYear() {
        console.log(this.#hi)
        console.log(this.#getFullName())
        return new Date().getFullYear() - this.#age
    }
    #getFullName() {
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


const newObj = {
    ['first-name']: 'Sumanth',
    ['last-name']: 'S S',
    ['#age']: 25
}

newObj['#age'] = 28 // this is not truly private method

console.log(newObj['#age'])  // this one i can access it but the below one is i can't because below one is the true private mode

// console.log(user1.#age)

// console.log(user1.#getFullName())