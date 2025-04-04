

// Get Request


fetch('https://dummyjson.com/products', {})
.then((res) => res.json())
.then((userData) => userData.products[0])
.then((productsData) => console.log(productsData))



// Post request

fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: {'Content-Type': 'application.json'},
  body: JSON.stringify({
    title: 'Volkswagen Virtus',
    variant: 'TSI'
  })
})
.then((res) => res.json())
.then(console.log)
.catch((error) => console.log(error))