async function makeHttpCall() {
  // return 'Hello World!!'
  // throw new Error('Detailed Error') // to reject the promise we should add the throw keyword

  fetch("https://httpbin.org/delay/5")
    .then((res) => res.json())
    .then(console.log);
    console.log("Hello World!!");
}
// makeHttpCall()

// used await keyword here to to make wait for other execution till the promise get resolve

async function makeRequest() {

  // const viewPromise = await fetch("https://httpbin.org/delay/10")
  // const showData = await viewPromise.json()

  const showData = await (await fetch("https://httpbin.org/delay/10")).json()  // short way to write the code instead of the above written code

  // console.log(showData)  // instead of adding the console here i called with the function but you should add the return too 
  console.log('Hello JavaScript!!')

  return showData

}
makeRequest().then(console.log)


function callSynchronous() {
  const xhr = new XMLHttpRequest()

  // console.log(xhr)
  
  // xhr.responseType = 'json'  // we can't use this when we running as a synchronous code

  xhr.onload = ()=> {
    console.log(JSON.parse(xhr.response))
  }

  xhr.open('GET', 'https://httpbin.org/delay/5', false) // by adding false statement it turns into a synchronous 
  xhr.send()

  console.log('Namasthe JavaScript')
}



// function forTest() {
//   console.log('Hello World!')

//   // throw 'Display an Error'

//   // return 'Namathe Javascript'

//   // throw new Error('Detailed Error')

//   console.log('Namasthe Javascript')
// }
