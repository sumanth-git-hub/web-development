console.log('Another JS file for Practice')

let myFavouriteCars = ['Toyota Innova','Fortuner','Virtus','Taigun','Slavia','Honda City']
console.log(myFavouriteCars)

console.log('used for loop inside the array')

for(let i = 0; i < myFavouriteCars.length; ++i){
    console.log(`${i + 1}. ${myFavouriteCars[i]}`)
}

console.log('used for.. of loop in array')

for(const lovedCars of myFavouriteCars) {
    console.log(lovedCars)
}





// used for in loop and object.keys, values and entries method in the below written code

console.log('used for.. in loop for object')
const carDetails = {
    carBrand : 'Toyota',
    CarModel : 'Innova Crysta',
    RegYear :  2024,
    CarColor: 'Pearl White'
}
console.log(carDetails)

console.log("// adding for.. in loop because it's not a iterable (Object)")

for(const checkCarDetails in carDetails){
    console.log(checkCarDetails,':',carDetails[checkCarDetails])
}

console.log('// but still we have another chance to use for.. of loop to the object (not a iterable) by using object.keys method')

const checkCarDetails = Object.keys(carDetails)
for(const keys of checkCarDetails){
    console.log(keys, ':', carDetails[keys])
}

console.log('// if we would like to see only values of the object then use "Object.values"')

const carDetailsValues = Object.values(carDetails)
for(const values of carDetailsValues){
    console.log(values)
}

console.log('// if we would like to see in array view of the object then use "Object.entries"')

const carDetailsEntries = Object.entries(carDetails)
for(const entries of carDetailsEntries){
    console.log(entries)
}
