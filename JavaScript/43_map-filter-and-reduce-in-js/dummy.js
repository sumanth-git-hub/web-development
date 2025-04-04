console.log('forEach, map, filter and reduce method in JS')

const fruitsNames = ['Apple','Banana','Drangun fruit','Grapes','Orange','Goa','Kiwi','Nuts']

// forEach Method
console.log('// forEach Method')
const forEachMethod = fruitsNames.forEach((fruits,index) => {
  console.log(index, fruits)
})

// map method
console.log('// map method')
const mapMethod = fruitsNames.map((fruits, index) => {
  console.log(index + 1,fruits)
  return fruits.toLocaleLowerCase()
})
console.log(mapMethod)

// filter method
console.log('// filter method')

const filterMethod = fruitsNames.filter((fruits,index) => {
  console.log(index,fruits,fruits.length <= 5)
  return fruits.length <= 5
  // return index > 3
})
console.log(filterMethod)

// another example of filter
const filterMethod2 = fruitsNames.filter((fruits,index) => {
  console.log(fruits,fruits.toLocaleLowerCase().includes('n'))
  return fruits.toLocaleLowerCase().includes('n')
})
console.log(filterMethod2)

// Chaining with map and filter with the below example
console.log('// Chaining with map and filter with the below example')
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

const adultStudents = studentsDetails.filter((students,index) => {
  console.log(index,students, students.age >= 18)
  return students.age >= 18
}).map((students) => {
  // by using map filtered only name of adult students
  return students.name
}).filter((students) => {
  // by using filter to exclude the name that not contain 's' in name (abhi is true but not conatin 's' in name so it is excluded)
  return students.toLocaleLowerCase().includes('s')
})
console.log(adultStudents)

console.log('Reduce in JavaScript')

const numerics = [2,4,6,8,10]

const reduceMethod = numerics.reduce((accumulate,current,index) => {
  console.log(index + 1, accumulate,current)
  return accumulate + current
},0)
console.log(reduceMethod)