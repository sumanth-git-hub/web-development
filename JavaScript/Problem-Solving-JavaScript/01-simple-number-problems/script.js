
const questionsArray = [
    {
        question: 'Print Numbers from 1 to N'
    },
    {
        question: 'Print Numbers from N to 1 without changing the loop condition of above question'
    },
    {
        question: 'Print All Even Numbers from 1 to N'
    },
    {
        question: 'Sum of First N Natural Numbers'
    },
    {
        question: 'Product (Factorial) of N'
    },
    {
        question: 'Sum of All Even Numbers up to N'
    },
    {
        question: 'Print Squares of Numbers from 1 to N'
    }
]

const questionList = document.querySelector('#list-of-questions')

    questionsArray.map((item, index) => {
        let listItem = document.createElement("li")
    listItem.textContent = `${index + 1}. ${item.question}`
    questionList.append(listItem)
    })

//1. Print Numbers from 1 to N

// by using the while loop we can execute it 
// const N = parseInt(prompt("Please Enter the Number")) // by using the prompt() the dialog box open while the webpage is opening and get the values directly from the user
// const N = 5
// let i = 0
// while(i < N){
//     i++
//     console.log(i)}

//enter the value in form and submit after that we can print it in console by suing loop 

const form = document.querySelector("body > div > form")
let i = 0

document.querySelector("body > div > form").addEventListener('submit', (e) => {
    e.preventDefault()
    let N = e.target[0].value;

    while(i < N){
    i++
    console.log(i)

    e.target[0].value = ""
}

})

//by using the for loop also we can execute the same
// for(let e = 1; e <= N; ++e){
//     console.log(e)
// }

//funny say sorry for 10 times by using array
// const newArray = new Array(10).fill("Sorry")
// newArray.map((item, index) => {
//     console.log(index + 1, item)
// })

//say sorry by using the for loop
// for(let i = 0; i <= 10; ++i){
//     console.log("Sorry")
// }

// 2. Print Numbers from N to 1 without changing the loop condition of above question

// const N = 10

// for(let i = 1; i <= N; i++){
//     console.log(N - i + 1)
// }

//3. Print All Even Numbers from 1 to N

// const num = 10
// for(let i = 1; i <=num; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

//4. Sum of First N Natural Numbers
// if i type the same 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10  in console i get the answer 55 which i am getting in the below added solutions 

//Brute Force solution: when we work on big numbers it takes more time & values are not accurate to avoid this we can use the "optimized method" added next to this
console.time() // to check how much time does this take to execute the function 
let sum = 0
const N = 100

for(let i = 1; i <= N; i++){
    // sum = sum + i // instead of using this we can use compound operator to execute the same
    sum += i
    //i = 1 sum = 0 final value of the sum 1
    //i = 2 sum = 1 final value of the sum 3
    //i = 3 sum = 3 final value of the sum 6
    //i = 4 sum = 6 final value of the sum 10
    //i = 5 sum = 10 final value of the sum 15
    //same we need to do till the value reach 10 the sum value will be 55
    // console.log(sum)
}
console.log(sum)
console.timeEnd()

//using bigInt we can fix the value but it also takes more time 

console.time() 
let sum2 = 0n;
const NewNum = 100n

for(let i = 1n; i <= NewNum; i++){
    sum2 += i
}
console.log(sum2)
console.timeEnd()

//Optimized solution

let newSum = 0 
let num = 10000000

console.time()

    newSum = num * (num + 1) / 2

    console.log(newSum)

    console.timeEnd()

// 5. Product (Factorial) of N

let n5 = 5n
let product = 1n

for(let i = 1n; i <= n5; i++){
     product *= i
}
console.log(product)

//6. Sum of All Even Numbers up to N

//brute force solution

let n6 = 10n
let sum6 = 0n

for(let i = 1n; i <= n6; i++){
    if(i % 2n === 0n){
        sum6 += i
        //2 + 4 + 6 + 8 + 10 = 30
    }
}
console.log(sum6) // answer is 30n 

//optimized solution by using the below added formula

let n6o = 10
let sum6o = 0

sum6 = n6o * (n6o + 2) / 4

console.log(sum6)

//7. Print Squares of Numbers from 1 to N

let n7 = 5

// let n7 = 5n
// for(let i = 1n; i <= n7; i++){
//      console.log(i ** 2n)
// }
for(let i = 1; i <= n7; i++){
    // console.log(i * i) // this also works
    // console.log(i ** 2n)
    console.log(Math.pow(i, 2)) // this also works when you're not use the "n" while declaring the variable
}

