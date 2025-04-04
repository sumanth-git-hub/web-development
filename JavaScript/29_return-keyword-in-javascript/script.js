console.log('Return keyword in JavaScript')

// if we have not added the return keyword and used only console.log() then undefined is the result for us
// function userDetails(){
//     console.log(5 + 6)
//     // return(5 + 6)
// }
// // userDetails()
// const result = userDetails()
// console.log(result)

// debugger
function returnValue(a, b) {
    return a * b
}

const checkValue = returnValue(11,4)
console.log(checkValue)

function readValue (s,p) {
    return s - p
}
const onlyCheck = readValue(10 + 20,4 * 8)
console.log(onlyCheck)

// readValue(readValue(6,4), readValue(6,4))
// this is how also we can do the calculation by using return value

function findDetails(myName,myAge,myProf) {
    return (`Hello my name is ${myName || 'Sumanth'} i am ${myAge} year old and working as a ${myProf} in digit insurance`)
  }
  findDetails(undefined,25,'Software developer')

  console.log(findDetails(undefined,25,'Software developer'))