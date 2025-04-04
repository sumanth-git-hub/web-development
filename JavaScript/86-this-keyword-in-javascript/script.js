/*

// When "this" is used within a method of an object, it refers to the object itself.

const carDetails = {
    carBrand: 'Volkswagen',
    carModel: 'Virtus',
    carRegYear: 2022,
    carRegNo: 'KA14PS02025',
    findCarDetails: function() {
        console.log(this) // here 'this' keyword refers to the object itself
        return new Date().getFullYear() - this.carRegYear 
    }
}

*/

/*

//In a regular function, "this" refers to the global object (window in a browser).

function buyCarInsurance() {
    console.log(this) //"this" refers to the global object
}
buyCarInsurance()

*/

/*

//In strict mode, "this" inside a function is undefined.

"use strict";

function sayHello() {
  console.log(this); // Output: undefined
}

sayHello();

*/

/*

// When "this" used within an event listener, this refers to the element that triggered the event. 

const newButton = document.createElement('button')
newButton.textContent = 'Click Button'
newButton.classList.add('click-button')
document.querySelector('body').appendChild(newButton)

newButton.addEventListener('click', function(e) {   // Output: the button element
    console.log(this)
})

*/

/*

// Arrow functions do not have their own this binding. They inherit the this value from the surrounding lexical scope.

const person = {
    name: "Alice",
    greet: function() {
      setTimeout(() => {
        console.log("Hello, " + this.name); // Output: "Hello, Alice"
      }, 1000);
    }
  };
  
  person.greet();
  
  */


  // starts from here video session

  const userDetails = {
    firstName : 'Sumanth',
    lastName: 'SS',
    age: 25,
    nameTags: ['a','b','c'],
    printTags() {
        console.log(this.nameTags)

        this.nameTags.forEach( function(checkTags) {
            console.log(checkTags,this)
        }, this)
    }

    // findAge() {
    //         function sayHello() {
    //             console.log(this)
    //         }
    //         sayHello()
    //         return this
    // }
  }


  // with constructor function

  function Hello() {
    this.firstName = 'Sumanth'
  }
 new Hello()

 // with the class

 class CheckClass {
    constructor(firstName) {
        this.firstName = 'Sumanth'
    }

    getUserName() {
       return this.firstName + ' S S'
    }
 }

 console.log(new CheckClass().getUserName())
