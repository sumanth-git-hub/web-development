const userDetails = {
  ['user-name']: 'Sumanth',
 userAge : 25,
}

try {
  console.log(userDetails.address.city)
  
} catch (error) {
    console.dir(error)
} finally{
  console.log('Finally')
}




// all about the previous class code to apply try and catch method

async function makeRequest() {
  try {
    const viewPromise = await fetch("https://httpbin.or/delay/2")
  const showData = await viewPromise.json()

  console.log(showData)

  return showData

  }
  catch (error){
    console.dir(error)
  }
}


// makeRequest().then(console.log)

// other code is still running when the above code throwing an error
function sayHello(a,b) {
  console.log(a + b)
  return a + b
}
sayHello(2,2)