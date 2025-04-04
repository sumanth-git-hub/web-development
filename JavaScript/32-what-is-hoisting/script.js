console.log('Hoisting in JavaScript')

console.log(a)  // it's called hoisting (accessing the variable before the declaration but it won't throw you any error)
var a = 'Sumanth'

sayYes() // called above the function but still it works without any errors
// function definition
// function declaration
function sayYes() {
    // return ('Hello World!..')
    console.log('Hello World!..')
}


// sayNo()  if i add the argument above the function it shows an error but the above method won't throw any error that's why i have added the argument in the bottom of the function expression
// function definition
// function expression
const sayNo = function() {  // anonymous function 
    console.log('Hello World!!')
}
sayNo()