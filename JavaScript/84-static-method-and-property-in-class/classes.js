
class factoryFun {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    static myName = 'Sumanth S S'  // example of static property 'myName'

    static {  // static method

        this.carBrand = 'Volkswagen',
       this.carModel = 'Virtus',
        this.carRegYear = 2022
       
        // console.log(this.carBrand)

      this.getCarAge = function() {
            return new Date().getFullYear() - this.carRegYear
        }
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
    }

}


const user1 = new factoryFun('Sumanth', 'S S', 25)
const user2 = new factoryFun('Sharath',  'S S', 20)

// factoryFun.hisName = 'Sharath S S'  // this also serves same as 'myName' but it's not a recommended method
console.log('Accessing static property:', factoryFun.myName)
console.log('Accessing static method:',factoryFun.carBrand,factoryFun.carModel,'is', factoryFun.getCarAge(),'Years old')  // Accessing static method
