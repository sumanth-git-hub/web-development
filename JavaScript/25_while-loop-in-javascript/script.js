
console.log('Program Started')

// debugger

let numberOne = 0

while (numberOne < 100) {
    ++numberOne 
    console.log(numberOne)
    // numberOne = numberOne + 1
}

const goodFriends = ['Sachin','Sharath','Rajesh','Darshan','Pavan','Ananya']

goodFriends.push('rest of them are','considered as','relatives','neighbours','colleagues')

console.log(goodFriends)

// let i = 0
// while (i < 6) {
//     console.log(goodFriends[i])
//     ++i
// }

// let i = 0

// while(i < goodFriends.length) {
//     goodFriends[i] = goodFriends[i] + ' part of life'
//     console.log(`${i + 1}. ${goodFriends[i]}`)
//     ++i
// }

let i = 0
while (i < goodFriends.length){
    goodFriends[i] = goodFriends[i] + ' is a good friend'
    console.log(`${i + 1}. ${goodFriends[i]}`)
    ++i
}
// console.log('Program Ended')