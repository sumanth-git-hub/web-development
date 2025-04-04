// from loop to some and every

const bestSedans = ['Volkswagen Virtus','Skoda Slavia','Skoda Superb','Honda City']

bestSedans.push('Hyundai Verna','Suzuki Ciaz')

bestSedans.forEach((listOfBestSedans) => console.log(listOfBestSedans))

// using map to avoid undefined 

bestSedans.map((listOfBestSedans)=> {
    console.log(listOfBestSedans,'Printed values by using map')
    return listOfBestSedans
})


// while loop

let indexNumberOfCars = 0
while(indexNumberOfCars < bestSedans.length){
    ++indexNumberOfCars
    console.log(`${indexNumberOfCars}: ${bestSedans[indexNumberOfCars]}`)
}

// do while loop

let jsutCounts = 10
do {
    ++jsutCounts
    console.log(jsutCounts, 'the values is appearing from do while loop')
}while(jsutCounts < 5)


// for loop


for(let tablesOfTwo = 0; tablesOfTwo <= 20; ++tablesOfTwo)
    console.log(`${tablesOfTwo}`)

let writeNumbers = 0
for(let tablesOfFour = 4; tablesOfFour <= 40; ++tablesOfFour){
    if(tablesOfFour % 4 == 0)

    // console.log(`4 X ${++writeNumbers} = ${tablesOfFour}`)

    setTimeout( function() {
        console.log(`4 X ${++writeNumbers} = ${tablesOfFour}`)
    }, 2000)
}

//for of loop

for(const listOfSedans of bestSedans){
    console.log(listOfSedans,'Printed with the help of for of loop')
}

// for in loop

const vehicleDetails = {
    carBrand: 'VolksWagen',
    carModel: 'Virtus',
    carManufacturedYear: 2024,
    carColor: 'White',
    carVariant: 'Virtus GT Plus 1.5 MT',
    moreInformation: {
        'fuel-type': 'Petrol',
        bhp: '148 bhp',
        transmission: 'Manual - 6 Gears, Sport Mode',
        'NCAP-Rating': ' 5 Star (Global NCAP)'
    }
}
vehicleDetails.moreInformation.sunroof = true  // adding additional details to the object like this
console.log(vehicleDetails)

// object with array 

const vehicleDetails1 = {
    carBrand: 'VolksWagen',
    carModel: 'Virtus',
    carManufacturedYear: 2024,
    carColor: 'White',
    carVariant: 'Virtus GT Plus 1.5 MT',
    moreInformation: ['fuel-type : Petrol', ' bhp: 148 bhp', 'transmission: Manual - 6 Gears, Sport Mode','NCAP-Rating: 5 Star (Global NCAP)']
}

// using for in loop to print the values of the non iterable (object)
let indexValues = 0
for(const carDetails in vehicleDetails1){
    console.log(`${++indexValues} ${carDetails} : ${vehicleDetails1[carDetails]}`)
}

const vehicleKey = Object.keys(vehicleDetails1)
console.log(vehicleKey)

for(const keys of vehicleKey){
    console.log(`${keys} : ${vehicleDetails1[keys]}`)
}

const vehicleValues = Object.values(vehicleDetails1)
console.log(vehicleValues)

for(const values of vehicleValues){
    console.log(values)
}

const vehicleEntries = Object.entries(vehicleDetails1)
console.log(vehicleEntries)

for(const values of vehicleEntries){
    console.log(values)
}

// for each method code written below

const carVariable = bestSedans.forEach((listDown,index) => console.log(index + 1,listDown, 'forEach method used to print'))

console.log(carVariable) // the return is undefined because we used forEach method 

// map used to avoid the undefined error

bestSedans.map((findCarDetails) => {
    console.log(findCarDetails, '[Used map to avoid undefined return]')
    return findCarDetails
})


const mapMethodinArray = bestSedans.map((checkCars,index, array) => {
    console.log(index + 1,checkCars, array)
    return checkCars.toLocaleLowerCase()
})
console.log(mapMethodinArray) // the return value is lowercase elements will be printed over console and not affect to the main array


const menLoveCars = bestSedans.map((buySedan,index, array) => {
    console.log(index + 1, buySedan, array, '[Printed with help of map]')
    return buySedan.toLocaleLowerCase()
})
console.log(menLoveCars)

// using filter method

const checkingFilter = bestSedans.filter((whySedans,index) => {
    console.log(index + 1, whySedans.length <= 10)
    return whySedans.length <= 10
})
console.log(checkingFilter)

const checkingFilterV = bestSedans.filter((whySedans,index) => {  // used includes keyword here to check the filter
    console.log(index + 1, whySedans.toLocaleLowerCase().includes('v'))
    return whySedans.toLocaleLowerCase().includes('v')
})
console.log(checkingFilterV)


const objectWithArray = [  // another example of filter 
    {
        employeeName: 'Sumanth',
        employeeAge: 25,
    },
    {
        employeeName: 'Sharath',
        employeeAge: 20,
        internshipStatus: true
    },
    {
        employeeName: 'Arun',
        employeeAge: 23,
    },
    {
        employeeName: 'Adithya',
        employeeAge: 21,
    },
    {
        employeeName: 'Abhi',
        employeeAge: 26,
    },
    {
        employeeName: 'Avinash',
        employeeAge: 24,
    },
    {
        employeeName: 'Akash',
        employeeAge: 22,
        internshipStatus: false
    },
]

const employeeAgeCheck = objectWithArray.filter((ageIsNumber,index) => {
    console.log(index + 1, ageIsNumber.employeeName, ageIsNumber.employeeAge, ageIsNumber.employeeAge <= 23)
    return ageIsNumber.employeeAge <= 23
}).map((ageIsNumber,index) => {  // it is called chaining of array method
    console.log(index + 1, ageIsNumber.employeeName)
    return ageIsNumber.employeeName
}).filter((ageIsNumber)=> {
    console.log(ageIsNumber,ageIsNumber.toLocaleLowerCase().includes('s'))
    return ageIsNumber.toLocaleLowerCase().includes('s')
}).filter((ageIsNumber,index) => {
    console.log(index,ageIsNumber,ageIsNumber.includes('S'))
    return ageIsNumber.includes('S')
})
console.log(employeeAgeCheck)

// const employeeNameCheck = employeeAgeCheck.map((nameIsString,index) => {
//     console.log(index + 1, nameIsString.employeeName)
// })

//used reduce method

const numberCheck = [2,4,6,8,10]

const crossCheck = numberCheck.reduce((accumulator, current,index) => {
    console.log(index,'Accumulator',accumulator, 'Current', current)
    return accumulator + current
},10)

console.log(crossCheck)

// some method in javascript

const someEvenNumbers = [2,4,6,8,10,11,12,14,16,18,10]

const findValue = someEvenNumbers.some((evennumbers,index) =>{
    console.log(index, evennumbers < 8)
    return evennumbers < 8
})
console.log(findValue)

const findOdd = someEvenNumbers.some((oddnumber,index) => {  // when at least one element meets true condition some consider it as true and print the value (11)
    if(oddnumber % 2 == 1){
        console.log(index)
    }
    console.log(index,oddnumber % 2 == 1)
    return oddnumber % 2 == 1
})
console.log(findOdd)

// every method 

const checkEvery = someEvenNumbers.every((checkNegative,index) => { // when only one or more element meets the false condition every consider it as a false and print the value (11)
    console.log(index,checkNegative % 2 == 0)
    return checkNegative % 2 == 0
})
console.log(checkEvery)