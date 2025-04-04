
const userDetails = {
    firstName: 'Sumanth',
    lastName: 'S S',
    get fullName() {
        console.log('Hello World!!')
        return `${userDetails.firstName} ${userDetails.lastName}`
    },
    set fullName(value) {
       const [firstName, lastName] = value.split(' ')
       this.firstName = firstName
       this.lastName = lastName
    }
}

// console.log(userDetails.fullName())
console.log(userDetails.fullName) // we should call the function without ()
userDetails.fullName = 'Sharath SS' // setting full name
console.log(userDetails.fullName)

// userDetails.fullName = "Sharath S S" // we can set the full name like this but this won't allow us to call the fullname function to avoid this we should use 'get' keyword


// example of using getter and setter inside the class

class factoryFun {
    constructor(firstName,lastName,age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    get fullName() { //getter method
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value) { // setter method
        const [firstName, lastName] = value.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }
}

const user1 = new factoryFun('Sumanth', 'SS', 25)
console.log(user1) // before setting the full name

user1.fullName = 'Sharath SS'
console.log(user1) // after setting the full name

