// // let userData
const displayImage = document.querySelector("img");
const clickButton = document.querySelector("body > button");

// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //       .then(response => response.json())
// //       .then(json => {
// //         console.log(json)
// //         // console.log('display the data')
// //         userData = json
// //       })

// // fetch('https://jsonplaceholder.typicode.com/posts', {
// //   method: 'POST',
// //   body: JSON.stringify({
// //     title: 'foo',
// //     body: 'bar',
// //     userId: 1,
// //   }),
// //   headers: {
// //     'Content-type': 'application/json; charset=UTF-8',
// //   },
// // })
// //   .then((response) => response.json())
// //   .then((json) => console.log(json));

// clickButton.addEventListener("click", () => {
//   // fetch('https://dog.ceo/api/breeds/image/random')
//   // .then(response => response.json())
//   // .then(json => {
//   //   console.log(json.message)
//   //   displayImage.src = json.message
//   // })

//   const xhr = new XMLHttpRequest();

//   console.log(xhr);
//   xhr.responseType = "json"; // instead of using JSON.parse we can use responseType

//   // xhr.addEventListener("load", () => {
//   //   // console.log(JSON.parse(xhr.response));  // use responseType instead of this
//   //   console.log(xhr.response);
//   //   displayImage.src = xhr.response.message
//   // });

// // xhr.onload = () => {  // serve same as xhr.addEventListener (above commented code)
// //   console.log(xhr.response);
// //     displayImage.src = xhr.response.message
// // }

// //   xhr.open("GET", "https://dog.ceo/api/breeds/image/random"); 
// //   // xhr.open("GET", "https://httpbin.org/delay/10"); // setting up the object
// //   xhr.send(); // sending the request
// // });

// // setTimeout(()=> {
// //   console.log('Say Hello after 8 seconds (Asynchronous JavaScript)')
// // }, 8000)

// // setTimeout(()=> {
// //   console.log('Asynchronous JavaScript')
// // }, 4000)


// // function sayHi(){
// //   console.log('Synchronous JavaScript')
// // }
// // new sayHi()


const xhr = new XMLHttpRequest()



const startTime = Date.now()
let currentTime = startTime

console.log(startTime + 2000)
console.log(currentTime)

clickButton.addEventListener('click', () =>{
  
    console.log(xhr)
  
  // xhr.responseType = "json"
  
  xhr.addEventListener('load', ()=> {
    // displayImage.src = JSON.parse(xhr.response.message)
    // displayImage.src = JSON.parse(xhr.response).message  // another way of setting up the response type
    // console.log(xhr.response.message)
    // console.log(JSON.parse(xhr.response).message)
    console.log(JSON.parse(xhr.response))
  })
  
  // xhr.open('GET','https://dog.ceo/api/breeds/image/random') 
  xhr.open('GET','https://httpbin.org/delay/10', false) 
  // xhr.open('GET','https://httpbin.org/delay/10')  // it's called AJAX (Asynchronous JavaScript and XML)
  // xhr.open('GET','https://dog.ceo/api/breeds/image/random', false) // adding false for api request to make it as Synchronous by default it's a asynchronous code
  xhr.send()
  
})


function hello(){
  while(startTime + 4000 > currentTime){
    currentTime = Date.now()
  }
  // console.log('Hi Until i unblock the thread you are nothing :) ')
}

const enterNow = () => {  // arrow Function
  console.log('Clicked the Button')
}

// const arrowFun = (a,b) => {  // arrow Function
//   console.log(a*b)
// }
// arrowFun(4,4)
