console.log('Attached Sheet for Practice from forEach to restParameter')

// for of 
console.log('// define for')

const numberToAdd = [8,16,24,32,40]

const loveCars = ['Volkswagen Virtus','Slavia','City','Verna']
const loveCars2 = ['Innova Crysta','Volkswagen Taigun','Skoda Kushaq']

const joinedArray = [...loveCars,...loveCars2]

for(const onlyForCars of loveCars){
    console.log(onlyForCars)
}

// define forEach Method and you will end up with the undefined return

console.log('// define forEach method')

console.log(loveCars.forEach((forEachCars) => {
    console.log(forEachCars.toLocaleLowerCase())
}))

// define map

console.log('// define map method')

console.log(loveCars.map((mapCars,index,array) => {
    console.log(index + 1,mapCars,array)
    return mapCars
}))

// define filter

console.log('// define filter method')

console.log(joinedArray.filter((filterCars,index) => {
    console.log(index +1, filterCars, filterCars.toLocaleLowerCase().includes('v'))
    return filterCars.toLocaleLowerCase().includes('v')
}))

// define chaining between filter and map in array 

const chainingFilAndMap = joinedArray.filter((mapFilter,index) => {
    return mapFilter.toLocaleLowerCase().includes('a')
}).map ((mapFilter,index) =>{
    // console.log(index + 1, mapFilter , 'contains only V' ,mapFilter.includes('V'))
    console.log(index + 1, mapFilter ,'contains a or A: ',mapFilter.toLocaleLowerCase().includes('a'))
    return mapFilter
}).filter((mapFilter) => {
    return mapFilter.toLocaleLowerCase().includes('s')
})
console.log(chainingFilAndMap)

// define chaining between object inside the array

const studentsDetails = [
    {
      name : 'Sumanth',
      age: 25,
    },
    {
      name : 'Sharath',
      age: 20,
    },
    {
      name : 'Abhi',
      age: 21,
    },
    {
      name : 'Akash',
      age: 18,
    },
    {
      name : 'Ayush',
      age: 17,
    },
    {
      name : 'Aadhi',
      age: 16,
    },
  ]

  const arrayObject = studentsDetails.filter((students,index)=> {
    console.log(index + 1, students.name, students.age >= 20)
    // return students.name
    return students.age >= 20
  }).map((students) => {
    return students.name
  }).filter((students) => {
    return students.includes('a')
  })
  console.log(arrayObject)

  //define reduce

  const reduceNumbers = [2,4,6,8,10]

  const crossCheck =  reduceNumbers.reduce((accumulator,current,index) => {
            console.log(index,'Accumulator: ' ,accumulator,'Current Value: ',current, 'Accumulator + Current =', accumulator + current)
            return accumulator + current
  },10) // if you're not mention the accumulator value it takes the first element in array as the accumulator
  console.log(crossCheck)

  // define some method in array

  const allEvenNumbers = [4,8,12,16,20,24,28,32,36,40,41]

  const findSome = allEvenNumbers.some((onlyEvenNumbers,index) =>{  // if some finds only one true value it consider the return value as a true
        console.log(index,onlyEvenNumbers,onlyEvenNumbers < 40)
        return onlyEvenNumbers < 40
  })
  console.log(findSome)

  const ifDivide = allEvenNumbers.some((doDivide,index) => {
        if(doDivide % 2 === 1){
            console.log(index)
        }
        console.log(index,doDivide,doDivide % 2 == 1)
        return doDivide % 2 == 1
  })
  console.log(ifDivide)

// define every method

const findOdd = allEvenNumbers.every((onlyOdd,index) =>{ // if every find only one false value then it consider the return as false
    if(onlyOdd % 2 == 0){
        // console.log(index,onlyOdd % 2 == 0)
    }
    console.log(index,onlyOdd,onlyOdd % 2 == 0)
    return onlyOdd % 2 == 0
})
console.log(findOdd)

// define argument keyword in javaScript

const argumentKey = function(a){
    console.log(a,arguments)
    return a
}
console.log(argumentKey('Virtus','Slavia','City','Verna'))

const addArguments = [10,20,30,40,50]

const argumentAddition = function(){
    let argAddition = 0
    for(let i = 0; i < arguments.length; ++i){
        console.log(i, arguments[i], argAddition += arguments[i])
        // argAddition += arguments[i]
    }
    return argAddition
}
console.log(argumentAddition(10,20,30,40,50,60))

// defining the combined operator to understand the above calculation

let copyOfaddArguments = 0
copyOfaddArguments += 10
console.log('copyOfaddArguments += 10: ',copyOfaddArguments)
copyOfaddArguments += 20
console.log('copyOfaddArguments += 20: ',copyOfaddArguments)
copyOfaddArguments += 30
console.log('copyOfaddArguments += 30: ',copyOfaddArguments)
copyOfaddArguments += 40
console.log('copyOfaddArguments += 40: ',copyOfaddArguments)
copyOfaddArguments += 50
console.log('copyOfaddArguments += 50: ',copyOfaddArguments)
copyOfaddArguments += 60
console.log('copyOfaddArguments += 60: ',copyOfaddArguments)

// defining the arguments with arrow function expression but it throws an error, so to avoid that i used rest parameter(...)

const arrowArgument = ((...arguments) =>{  // here arguments is just considered as a normal keyword
        let arrowFails = 10
        for(let i =0; i < arguments.length; ++i){
            arrowFails += arguments[i]
        }
        return arrowFails
})
console.log(arrowArgument(10,20,30,40,50,60))

//define default parameter 

function defaultParameter(a = 2,b){
    // console.log(a + b)
    return a + b
}
console.log(defaultParameter(undefined,2))

function defaultParameter2(userName = 'Sumanth',userAge){
    return userName + userAge
}
console.log(defaultParameter2(undefined, 25))

// another method to add default parameter 

function defaultParameter3(userName,userAge){
    if(!userName){
        userName = 'Sumanth'
    }
    if(!userAge){
        userAge = 25
    }
    return userName + userAge
}
console.log(defaultParameter3(undefined,undefined))


const randomNumbers = function(rollNow = 10){
    return Math.floor(Math.random() * rollNow)
}
console.log(randomNumbers())

// const clearIntervalToStop = setInterval(() =>{
//     console.log(randomNumbers()) 
// },1000)

// define spread operator 

const whyNotString = 'Sumanth'  // used spread operator on string
console.log(...whyNotString)

const spreadArray = [11,22,33,44,55]
const spreadArray2 = [66,77,88,99,110]

const joinArray = [...spreadArray,...spreadArray2]  // used spread operator on array
console.log(joinArray)

function useSpreadOp(){  
    let calculateSp = 0
    for(let i = 0; i < arguments.length; ++i){
        console.log(i +1,'Accumulator: ',calculateSp,'Argument Value: ',arguments[i])
        calculateSp += arguments[i]
    }
    return calculateSp
}
console.log(useSpreadOp(...joinArray)) // used spread operator to call back the function

console.log(useSpreadOp(...spreadArray)) 
console.log(useSpreadOp(...spreadArray2)) 
console.log(useSpreadOp(...whyNotString)) 

const spreadObject = {
    hisName: 'Sumanth',
    hisAge: 25,
    hisNative: 'Thirthahalli'
}
spreadObject.hisPhoneNumber = 7348988867  // the old way to add elements in object

const addElementsInObject = {...spreadObject, isHeUseWhatsapp: true}  // used spread operator to add elements in object

console.log(spreadObject)

console.log(addElementsInObject)

// define rest parameter

const justAnArray = [12,24,36,48,60]

const restParameter = ((a,b,...restPar) => {
    console.log('a =',a,'b =',b)
    console.log('Arguments:',restPar)
    let doCalculate = 0
    for(let i = 0; i < restPar.length; ++i){
        console.log('Accumulator',doCalculate,'Arguments',restPar[i],'Accumulator + Arguments = ',doCalculate += restPar[i])
    }
    return doCalculate
})
console.log(restParameter(12,24,36,48,60))

let execute180 = 0
execute180 += 12
execute180 += 24
execute180 += 36
execute180 += 48
execute180 += 60
console.log(execute180)

console.log(restParameter(...justAnArray,20,16))

// defining rest parameter along with the reduce

const reduceRest1 = [4,8,12,16,20]
const reduceRest2 = [24,28,32,36,40]

const reduceRestParameter = reduceRest1.concat(reduceRest2)  // combined 2 arrays together by using concat

// const reduceRestParameter1 = [...reduceRest1,reduceRest2]  // it didn't worked so i used concat


const comboRestAndReduce = ((...reduceRest) =>{
    console.log('Arguments:',reduceRest)
    return reduceRest.reduce((accumulatorValue,currentValue) => accumulatorValue + currentValue)
})
console.log(comboRestAndReduce(...reduceRestParameter))
// console.log(comboRestAndReduce(...reduceRestParameter1))

// how to convert the arguments to array

function convertArray(){
    console.log('Normal Argument:',arguments)
    console.log('Converted Argument to Array',[...arguments])  // way to convert argument into array
    return [...arguments].reduce((accumulator,current) => accumulator + current)
}
console.log(convertArray(20,40,60,80,100))

// how to convert the arguments to array in another method

function convertArray2(){
    console.log('Normal Argument:',arguments)
    console.log('Converted Argument to Array',Array.from(arguments))  // way to convert argument into array
    return Array.from(arguments).reduce((accumulator,current) => accumulator + current)
}
console.log(convertArray2(10,20,30,40,50))


