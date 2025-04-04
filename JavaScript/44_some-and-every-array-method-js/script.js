const evenNumbers = [2,4,6,8,10,11,12,14]

// const checkSomeValue = evenNumbers.some((num,index) => {
//     console.log(index,num)
//     return num > 4
// })
// console.log(checkSomeValue)

const checkSomeValue = evenNumbers.some((num,index) => { // when there is a presence of only one true value it shows true
    if(num % 2 == 1) {
        console.log(index, num)
    }
    // console.log(num)
    return num % 2 == 1
})
console.log(checkSomeValue)


console.log('Every Array method')

const oddNumbers = [1,3,5,7,9,11,13,14]

const checkSomeValueOfEvery = oddNumbers.every((num,index) => { // when there is a presence of only one false value it shows false
    if(num % 2 == 1) {
        console.log(index, num % 2 == 1)
    }
    // console.log(num)
    return num % 2 == 1
})
console.log(checkSomeValueOfEvery)