console.log('hello world!')

let username = 'Sumanth'
let lastName = 'suresh'
let age = 25
let hobby = null
let isHappy = true
let a

// the variables that are written in let can be changed like the below
username = 'Sharath'
lastName = 's s'
age = 20
hobby = undefined
isHappy = true
a = 'pursuing MCA'

let userIntro = 'Hello World!! my name is '+ username + ' '+lastName + ' i am' + ' ' + age +' years old '+ a  + ' my hobbies are ' + hobby + ' and the wriiten statement is ' + isHappy;

console.log(userIntro);
console.log(typeof userIntro)


// the variables that are written in const can't be chnaged like the below


const hoursInDay = 24
const workHours = 9
// hoursInDay = 18
const dayRout = 'the day has '+ hoursInDay +' hours '+"but i work for only "+ workHours + " hours"

console.log(hoursInDay)
console.log(dayRout)

// console.log(userIntro, username, age, hobby, isHappy)
// console.log(typeof username, typeof userIntro, typeof age, typeof hobby, typeof isHappy)



// var variable works as similar like let but it can be access by out of the block

// the curly braces are consider as a block

{var yourName = 'Sharath'}

{const myName = 'sumanth'}

{let hisName = 'Sachin'}

console.log(yourName)
// console.log(myName)
// console.log(hisName)



// rules to follow to name variables

let Sumanth$_Seo = Symbol('he is like a ~ symbol')


// when we write the const and let inside of the block then it print the results if we write outside the box then it won't but var works diffrent than both of this
{
    const myName = 'Sumanth'
    console.log(myName)

    let herName = 'nothing'
    console.log(herName)

    var brotherName = 'Sharath'
}

console.log(brotherName)
