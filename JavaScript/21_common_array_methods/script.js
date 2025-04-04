const evenNumbers = [0,2,4,6,8,10]
const animalsArray = ['cow', 'buffalo', 'donkey', 'rabbit', 'sheep', 'goat', 'elephant']
const oddNumbers = [1,3,5,7,9]

// const shiftWorks = evenNumbers.shift()
// const shiftWorks1 = evenNumbers.shift()
// const shiftWorks2 = evenNumbers.shift()
// const shiftWorks3 = evenNumbers.shift()
// const shiftWorks4 = evenNumbers.shift()
// const shiftWorks5 = evenNumbers.shift()

// console.log(evenNumbers)
// shift() is used to remove the element from the beginning of the array and it reflects on original array

// const unshiftWorks = evenNumbers.unshift(-1)
// const unshiftWorks1 = evenNumbers.unshift(-2)
// const unshiftWorks2 = evenNumbers.unshift(-3)
// const unshiftWorks3 = evenNumbers.unshift(-4)

// console.log(evenNumbers)

// unshift() is used to add the elements at the beginning of the array that too in the right to left direction

const concatWorks = evenNumbers.concat(animalsArray, 'Sumanth Content Element' ,oddNumbers)
console.log(concatWorks)

// concat() is used to connect multiple arrays and add other elements as well 

const indexOfWorks = oddNumbers.indexOf(9)
console.log(indexOfWorks)

// indexOf() is used to find out the index value of the element

const isIncludesWorks = animalsArray.includes('elephant')
console.log(isIncludesWorks)

// includes is used to check the presence of element in array

const reverseWorks = evenNumbers.reverse()
console.log(reverseWorks)

// reverse() is used to change the direction of elements inside the array and it reflects on original array

const sortWorks = animalsArray.sort()
console.log(sortWorks)

// sort() is used to align the elements in a to z format and it reflects on original array

const sliceWorks = animalsArray.slice(4,7)
console.log(sliceWorks)

// slice() is used to cut the elements inside the Array and original array won't get influenced with this

const spliceWorks = animalsArray.splice(4,2,'yak','horse','camel','deer')

console.log(spliceWorks)
console.log(animalsArray)

// splice() is used to remove and replace the element from the array and the changes reflect on original array too