console.log('All about Reduce')

const numbers = [2,4,6,8,10,12,14,16]

const reduceNumbers = numbers.reduce((accumulator, current, index)=>{
    // console.log(index, current)
console.log(accumulator, current)
return accumulator + current
},0) // initial value 
console.log(reduceNumbers)