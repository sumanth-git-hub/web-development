
class UserDetails {
    constructor(firstName,lastName,age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    workingOn(){  // this is the next priority, the first priority is in //95 line
        return 'Working as a Software Engineer'
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(passValue) {
        const [firstName, lastName] = passValue.split(' ')

        this.firstName = firstName
        this.lastName = lastName
    }

}

// const student1 = new UserDetails('Sumanth', 'SS', 25)

// student1.fullName = 'Sharath SS'


class Student extends UserDetails {
    // constructor(firstName,lastName,age, standard) {
    //     this.firstName = firstName
    //     this.lastName = lastName
    //     this.age = age
    //     this.standard = standard
    // }
    // getBirthYear() {
    //     return new Date().getFullYear() - this.age
    // }

    // get fullName() {
    //     return `${this.firstName} ${this.lastName}`
    // }
    // set fullName(passValue) {
    //     const [firstName, lastName] = passValue.split(' ')

    //     this.firstName = firstName
    //     this.lastName = lastName
    // }

    constructor(firstName,lastName,age,standard) {
        super(firstName,lastName,age) 
        this.standard = standard
    }

    study() {
        return 'pursuing MCA'
    }
}

const student1 = new Student('Sumanth', 'SS', 20, 'MCA')

// student1.fullName = 'Sharath SS'

class Employee extends UserDetails {
    // constructor(firstName,lastName,age, company) {
    //     this.firstName = firstName
    //     this.lastName = lastName
    //     this.age = age
    //     this.company = company
    // }

    // getBirthYear() {
    //     return new Date().getFullYear() - this.age
    // }

    // get fullName() {
    //     return `${this.firstName} ${this.lastName}`
    // }
    // set fullName(passValue) {
    //     const [firstName, lastName] = passValue.split(' ')

    //     this.firstName = firstName
    //     this.lastName = lastName
    // }

    constructor(firstName,lastName,age,company) {
        super(firstName,lastName,age)
        this.company = company
    }

    workingOn(){  // this will be the first priority 
        return 'Working as a web developer'
    }
}

const employeeDetails = new Employee('Sumanth', 'S S', 25 ,'Digit Insurance');
employeeDetails.fullName = 'Sumanth Hindu'