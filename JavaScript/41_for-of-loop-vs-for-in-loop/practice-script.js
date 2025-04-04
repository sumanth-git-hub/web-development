console.log('Practice of while loop, do while loop, for loop, for in loop and for of loop')

const loveSedans = ['Volkswagen Virtus','Skoda Slavia','Audi A4','Honda City','Hyundai Verna','Skoda Superb']

// while loop practice

let carCount = 0

while(carCount < loveSedans.length){
    console.log(`${carCount + 1}: ${loveSedans[carCount]} Recommended Choice of Engineers`)
    ++carCount
}

let countNum = 10

while(countNum < 15){
    countNum++
    console.log(countNum)
}

// do while loop

let i = 10

do {
    ++i
    console.log(i)
} while(i <= 5)


    let countNum1 = 0

do {
    console.log(`${countNum1 + 1} : ${loveSedans[countNum1]}`)
    countNum1++
}while(countNum1 < loveSedans.length)

// for loop 

for(let forLoopCount = 0; forLoopCount < loveSedans.length; ++forLoopCount)
    console.log(forLoopCount + 1,loveSedans[forLoopCount],'[Printed by using for loop]')

let counts = 0
for(let tablesOfTwo = 2; tablesOfTwo <= 20; ++tablesOfTwo)
    if(tablesOfTwo % 2 == 0)
        console.log(`2 X ${++counts} = ${tablesOfTwo}`)

// types of for loops

// for of loop 
let keyNumbers = 0
for(const goodSedands of loveSedans){ // for of loop will work here because it is iterable
    console.log(`${++keyNumbers}: ${goodSedands}`)
}

const userName = 'Sumanth'

for(const hisName of userName){ // each letters get printed line by line
    console.log(++keyNumbers,hisName)
}

// for in loop

for(wonderfulSedans in loveSedans){  // when we use for in loop in array it only displays key not value to avoid this for in loop is only recommended to use on non iterables (objects)
    console.log(wonderfulSedans)
}

const carObject = {
    carBrand: 'VolksWagen',
    carModel: 'Virtus',
    carVariant: 'GT 1.5 TSI',
    carColor: 'White',
    carManufacturedYear: 2024
}

console.log(carObject)

for(const carDetails in carObject){  // right use of for in loop with non iterables 
    console.log(carDetails,':',carObject[carDetails])
}

// when i use for of with objects

// for(const carDetails of carObject){  // got the error as 'carObject is not iterable'
//     console.log(carDetails)
// }

// still i can use for of with non iterables by using object.keys, object.vales and object.entries

const carDetailsObject = Object.keys(carObject)
for(const keyDetails of carDetailsObject){
    console.log(keyDetails,':',carObject[keyDetails])
}

const carDetailsValues = Object.values(carObject)
for(const values of carDetailsValues){
    console.log(values)
}

const carDetailsEntries = Object.entries(carObject)
for(const entries of carDetailsEntries){
    console.log(entries)
}

console.log('Purely printed the values of Object.keys, Object.values and object.entries below')
const onlyKeys = Object.keys(carObject)
console.log(onlyKeys)

const onlyValues = Object.values(carObject)
console.log(onlyValues)

const onlyEntries = Object.entries(carObject)
console.log(onlyEntries)