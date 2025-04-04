// const dayNumber = parseInt(prompt('Please Enter the day number'))

// if (dayNumber === 0) {
//     console.log('Sunday')
// } else if (dayNumber === 1){
//     console.log('Monday')
// } else if (dayNumber === 2){
//     console.log('Tuesday')
// } else if (dayNumber === 3){
//     console.log('Wednesday')
// } else if (dayNumber === 4) {
//     console.log('Thursday')
// } else if (dayNumber === 5){
//     console.log('Friday')
// } else if (dayNumber === 6) {
//     console.log('Saturday')
// } else {
//     console.log('Please enter a valid details')
// }


// converting the above code into switch case -- comments


// const dayNumber = parseInt(prompt('Please Enter the Day number'))

// switch (dayNumber) {
//     case 0:
//         console.log('Sunday')
//     break
//     case 1: 
//         console.log('Monday')
//     break
//     case 2: 
//         console.log('Tuesday')
//     break
//     case 3: 
//         console.log('Wednesday')
//     break
//     case 4: 
//         console.log('Thursday')
//     break
//     case 5: 
//         console.log('Friday')
//     break
//     case 6:
//         console.log('Saturday')
//     break
//     default:
//         console.log('Please Enter a Valid Day Number')
// }

// console.log('First Program Ended here')

// <!first example is done -->  comments

// const userName = 'Sumanth'
// const userAge = 21

// if (userAge > 0 && userAge <= 5) {
// console.log(`${userName} is a kid`)
// console.log('He is with parents now')
// } else if (userAge >=5 && userAge <=12) {
// console.log(`${userName} is a Primary School Student`)
// console.log('He is studying in his Village')
// } else if (userAge >=13 && userAge <=16) {
// console.log(`${userName} is a Secondary School Student`)
// console.log('He is studying in his Hometown')
// } else if (userAge >=17 && userAge <=22) {
//     console.log(`${userName} is a Collage Student`)
//     console.log('He is studying in Bangalore')
//     if(userAge >= 17 && userAge <= 19) {
//         console.log(`${userName} is pursuing PUC`)
//     }
//     if (userAge >=20 && userAge <= 22) {
//         console.log(`${userName} is pursuing his graduation`)
//     }
// } else if (userAge >=23 && userAge <=45) {
//     console.log(`${userName} is a Working Professional`)
//     console.log('He is working as a web developer')
// } else if (userAge >=45 && userAge <=80) {
//     console.log(`${userName} is a retired person`)
//     console.log('He is staying with his family')
// } else {
//     console.log('Default value is written here')
// }

// console.log('Program is Ended here')

// converting the above code into switch case -- comments

// const userName = 'Sumanth'
// const userAge = 5

// switch (true) {
//     case (userAge > 0 && userAge <= 5):
//         console.log(`${userName} is a kid`)
//         console.log('He is with parents now')
//     break
//     case (userAge >=5 && userAge <=12):
//         console.log(`${userName} is a Primary School Student`)
//         console.log('He is studying in his Village')
//     break
//     case (userAge >=13 && userAge <=16):
//         console.log(`${userName} is a Secondary School Student`)
//         console.log('He is studying in his Hometown')
//     break
//     case (userAge >=17 && userAge <=22):
//         console.log(`${userName} is a Secondary School Student`)
//         console.log('He is studying in his Hometown')
//     break
//     case (userAge >=23 && userAge <=45):
//         console.log(`${userName} is a Working Professional`)
//         console.log('He is working as a web developer')
//     break
//     case (userAge >=45 && userAge <=80):
//         console.log(`${userName} is a retired person`)
//         console.log('He is staying with his family')
//     break
//     default:
//         console.log('Please Enter the Valid user name and age')
// }
//         console.log('Program is Ended here!!')

// <!second example is done -->  comments


// let grade = 'B'
// let userName = 'Sumanth'

// if (grade === 'a' || grade === 'A') {
//     console.log(`${userName} is scored between 85% to 100%`)
// } else if (grade === 'b' || grade === 'B') {
//     console.log(`${userName} is Scored between 70% to 85%`)
// } else if (grade === 'c' || grade === 'C') {
//     console.log(`${userName} is scored between 50% to 70%`)
// } else if (grade === 'd' || grade === 'D') {
//     console.log(`${userName} is scored between 35% to 50%`)
// } else {
//     console.log("Sorry you're failed in this examination better luck next time")
// }

// console.log('Program Ended here!!')

// converting the above code into switch case -- comments

const grade = prompt('Please check Your Grade')
let userName = 'Sumanth'

switch(grade.toLocaleLowerCase()){
    case ('a'):
        console.log(`${userName} is Scored between 85% to 100%`)
    break
    case ('b'):
        console.log(`${userName} is Scored between 70% to 85%`)
    break
    case ('c'):
        console.log(`${userName} is Scored between 50% to 70%`)
    break
    case ('d'):
        console.log(`${userName} is Scored between 35% to 50%`)
    break
    default:
        console.log(`${userName} is failed in the Examination`)
}


console.log('Program Ended here!!')
