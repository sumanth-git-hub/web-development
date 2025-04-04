'use strict' // should be written at the top of the page

console.log('Lexical Scope Vs Block Scope In JavaScript')

const userName = 'Sumanth'
let userAge = 25
var a = 'S S'

// function add() {
  
//   const userName = 'Sharath'
//   const x = 2
//   const y = 4
//   console.log(x+y)
//   console.log(userName)
  
// }
// add()

// debugger

function subtract(){
  const x = 18
  const y = 14
  const z = 20
  console.log(x-y);
  console.log(userName);
    
        function child() {
            const childName = 'Babu'
            console.log(childName);
            console.log(x,z);
          
          if(true) {
                const num1 = 4
                var num2 = 24
                // num3 = 32 //we can access the variable anywhere on script by creating like this but it is not a good practice this value we can able to see in windows object (windows.num3) in addition to prevent this kind of operation we use 'use strict' mode at the top of the script
                console.log(num1)
                // console.log(num2)  // var can be accessed inside and outside of the block but it's not the same case for const and let
            }
            console.log(num2)

                function grandChild() {
                    console.log(z)
                    const grandChildName = 'machine'
                    console.log(grandChildName)
                    console.log(childName)
                }
                grandChild()
        }
        child()
        // console.log(num2)  // why i'm unable to access this variable created in var is we can't access them out of the function
}
subtract()
console.dir(subtract)

// console.log(num3)

