// let userData
const displayImage = document.querySelector("img");
const clickButton = document.querySelector("body > button");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         // console.log('display the data')
//         userData = json
//       })

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

clickButton.addEventListener("click", () => {
  // fetch('https://dog.ceo/api/breeds/image/random')
  // .then(response => response.json())
  // .then(json => {
  //   console.log(json.message)
  //   displayImage.src = json.message
  // })

  const xhr = new XMLHttpRequest();

  console.log(xhr);
  xhr.responseType = "json"; // instead of using JSON.parse we can use responseType

  // xhr.addEventListener("load", () => {
  //   // console.log(JSON.parse(xhr.response));  // use responseType instead of this
  //   console.log(xhr.response);
  //   displayImage.src = xhr.response.message
  // });

xhr.onload = () => {  // serve same as xhr.addEventListener (above commented code)
  console.log(xhr.response);
    displayImage.src = xhr.response.message
}

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random"); 
  // xhr.open("GET", "https://httpbin.org/delay/10"); // setting up the object
  xhr.send(); // sending the request
});

// function sayHi(){
//   console.log('Hi')
// }
// new sayHi()