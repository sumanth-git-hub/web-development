

// const userInfo = 4 >= 3 ? 'Right' : 'wrong'
// console.log(userInfo)

let userName = 'Samanth'
const userAge = 25
let userGender = 'm'

if (userGender.toLocaleLowerCase() !== 'm') {
    userName = 'Suma'
}
const userMessage = (`${userName} is ${userAge} years old and ${userGender.toLowerCase() === 'm'? 'he' : 'she'} is a software engineer`)
console.log(userMessage)


// another method
const result = (`${userGender.toLowerCase() === 'm'? 'he' : ''?'him' : 'she'} used to work for frontend development`)
console.log(result)

// trying to execute with else if
if (userGender.toLocaleLowerCase() === 'm') {
    console.log(`${userName} is ${userAge} years old and he is one of the best web developer in Digit Insurance`)
}
else if (userGender.toLocaleLowerCase() !== 'm') {
    console.log(`${userName} is ${userAge} years old and she is one of the best web developer in Digit Insurance`)
}
else {
    console.log('Please Enter a valid Gender')
}