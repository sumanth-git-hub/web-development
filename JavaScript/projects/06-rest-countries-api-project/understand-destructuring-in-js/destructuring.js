

const destructuringArray = ['Virtus', 'Slavia', 'Ciaz', 'Verna','Honda City']

const [firstCar, secondSedan,,,bestDeal] = destructuringArray  // this is how we do destructure an array (name doesn't matters)
console.log(firstCar)
console.log(secondSedan)
console.log(bestDeal)

console.log({0: firstCar})  // destructure an array like object

const vehicleDetails = {
    carBrand: 'Volkswagen',
    carModel: 'Virtus',
    carVariant: 'TSI',
    carRegDetails: {
        regNo: 'KA14PS0205',
        regYear: 2016
    }
}

const {carBrand} = vehicleDetails // destructuring an  object (name matters)
console.log(carBrand)
const {carVariant: variantDetails} = vehicleDetails  // way to rename while destructuring
console.log(variantDetails)

const {carRegDetails, carRegDetails: {regNo}, carRegDetails: {regYear}} = vehicleDetails  // multilevel destructuring an  object
console.log(carRegDetails)
console.log(regNo)
console.log(regYear)


function carDetails({carRegDetails, carBrand}) {  // destructuring an  object inside the function
    console.log(carBrand, carRegDetails)
}
carDetails(vehicleDetails)


function carModelDetails([firstCar]) {  // destructuring an array inside the function
    console.log(firstCar)
}
carModelDetails(destructuringArray)


function carModelDetailsNext({1: carBrand}) {  // destructuring an  array like object  inside the function
    console.log(carBrand)
}
carModelDetailsNext(destructuringArray)

const displayCode = document.querySelector('.display-code')

displayCode.textContent = `
const destructuringArray = ['Virtus', 'Slavia', 'Ciaz', 'Verna','Honda City']
const [firstCar, secondSedan,,,bestDeal] = destructuringArray
console.log(firstCar) the result is "Virtus"`


const displaySecondCode = document.querySelector('.display-second-code')

displaySecondCode.textContent = `const vehicleDetails = {
    carBrand: 'Volkswagen',
    carModel: 'Virtus',
    carVariant: 'TSI',
    carRegDetails: {
        regNo: 'KA14PS0205',
        regYear: 2016
    }
}

const {carBrand} = vehicleDetails
the result is "Volkswagen"`