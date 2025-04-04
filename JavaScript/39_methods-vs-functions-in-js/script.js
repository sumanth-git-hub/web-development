const mathsObject = {
    E: 2.718281828459045, // called property inside the object
    add: function (a,b) {
        return a + b
    },
    square: function(s,p){
        return s * p
        // console.log(s * p) // if i use console instead of return below the result i used to get undefined to avoid that we use only return
    },
    // subtract: function(x,y){ // writing in this method also the right one
    //     return x - y
    // }
    subtract(x,y){ //new ECMAScript (ES6) method
        return x - y
    },
    // exponentiation(expo){
    //     return expo ** expo
    // },
    exponentiation: function(expo){
        return expo ** expo
    }
}
console.log(mathsObject)
console.dir(mathsObject.add)
// console.log(mathsObject.square(8,5))


// inside of the mathsObject object we have add, square, subtract and exponentiation methods