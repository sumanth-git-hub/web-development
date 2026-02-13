//1. print numbers from 1 to N

const N = 10
for(let e = 1; e <= N; ++e){
    console.log(e)
}

// 2. Print Numbers from N to 1 without changing the loop condition of above question (in a reverse direction)

const N = 10

for(let i = 1; i <= N; i++){
    console.log(N - i + 1)
}

//3. Print All Even Numbers from 1 to N

const num = 10
for(let i = 1; i <=num; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

//4. Sum of First N Natural Numbers
// if i type the same 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10  in console i can get the answer 55 which i am getting in the below added solutions 

//brute force solution for the query but this is not correct when we work on big numbers and it takes more time 

let sum = 0
const N = 10 

for(let i =0; i <= N; i++){
    sum += i
}
console.log(sum)
// the sum value will be 55 

//using bigInt we can fix the value but it also takes more time 

console.time() 
let sum2 = 0n;
const NewNum = 100000000n

for(let i = 1n; i <= NewNum; i++){
    sum2 += i
}
console.log(sum2)
console.timeEnd()

// optimized solution

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

// home work solutions

//1. Print all numbers divisible by 3 and 5 up to N

    const formElement = document.querySelector(".form-element");
    const outPut = document.querySelector(".out-put-element")

formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = e.target[0].value;
    
    for(let i = 1; i<= inputValue; i++){
        if(i % 3 === 0 && i % 5 === 0){
            outPut.textContent = `Output is ${i}`
            console.log(i)
        }
    }

    e.target[0].value = ""
})

//2. Find the sum of all odd numbers up to N

let numHome2 = 10
let sumHome2 = 0

for(let i = 0; i <= numHome2; i++){
    if(i % 2 === 1){
        sumHome2 += i
    }
}
 console.log(sumHome2)

//3. Print the cubes of numbers from 1 to N

let numHome3 = 5

for(let i = 1; i <= numHome3; i++){
    console.log(i * i * i)
}

//4. Print only the numbers that are both even and perfect squares

let numHome4 = 20

for(let i = 1; i <= numHome4; i++){
    if(Number.isInteger(Math.sqrt(i)) && i % 2 === 0){
         console.log(i * i)
    }
}