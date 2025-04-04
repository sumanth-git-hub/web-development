
const checkDate = new Date(1734487867415)

console.log(checkDate.getTime())
console.log(checkDate.toLocaleString('en-GB'))
console.log(checkDate.toLocaleDateString('en-GB'))

// console.log(Date.now()) // is also serve the same as 'checkDate.getTime()'

// console.log(checkDate.getTime())

// console.log(Math.round(checkDate.getTime() / 1000 / 60 / 60 / 24))


// MM/DD/YYYY or YYYY/MM/DD only accept these methods

const user1DOB = '17/02/1999'  // DD/MM/YYYY this method won't accept
const user2DOB = '19-04-2004' // DD/MM/YYYY this method won't accept
const user3DOB = '1999-02-17T05:30:00.300'  // YY/MM/DD HH/MM/SS.MS 


const findUser1Dob = new Date(user1DOB.split('/').reverse().join('/')).getTime() // converted the DD/MM /YY into YY/MM/DD
const findUser2Dob = new Date(user2DOB.split('-').reverse().join('-')).getTime()
const findUser3Dob = new Date(user3DOB).getTime()
// const findUser4Dob = new Date(2024, 11, 18, 8, 45, 20, 400) // YY/MM/DD/HH/MM/SS/MS
console.log({findUser1Dob, findUser2Dob, findUser3Dob})

const [day, month, year] = user1DOB.split('/').map(el => +el)
const findUser4Dob = new Date(year, month - 1 , day)
console.log(findUser4Dob)

