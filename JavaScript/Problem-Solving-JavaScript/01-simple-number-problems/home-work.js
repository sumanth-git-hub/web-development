
const questionsArray = [
    {
        question: 'Print all numbers divisible by 3 and 5 up to N'
    },
    {
        question: 'Find the sum of all odd numbers up to N'
    },
    {
        question: 'Print the cubes of numbers from 1 to N'
    },
    {
        question: 'Print only the numbers that are both even and perfect squares'
    }
]

const questionList = document.querySelector('#list-of-questions')

    questionsArray.map((item, index) => {
        let listItem = document.createElement("li")
    listItem.textContent = `${index + 1}. ${item.question}`
    questionList.append(listItem)
    })


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
// console.log(sumHome2)

//3. Print the cubes of numbers from 1 to N

let numHome3 = 5

for(let i = 1; i <= numHome3; i++){
    // console.log(i * i * i)
}

//4. Print only the numbers that are both even and perfect squares

let numHome4 = 20

for(let i = 1; i <= numHome4; i++){
    if(Number.isInteger(Math.sqrt(i)) && i % 2 === 0){
        // console.log(i * i)
    }
}