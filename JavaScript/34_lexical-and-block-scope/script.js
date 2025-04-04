'use strict'  // should be written at the top of the page

console.log('Lexical Scope and  Block Scope')



const userName = 'Hello'

// console.log(add())
// debugger
function add() {
    const a = 1
    const b = 2
    const c = 4
    console.log(a + b)

    // console.log(myName)

    function add1() {
        const childName = 'Sumanth'
        console.log(childName)
        console.log(c)
        
        {
            let myName = 'Mera Naam'  // let and const is blocked scope is you can't access them outside of the block
            // sirName = 'Hindu'  // use strict won't allow this method
            var sirName = 'Hindu'
            console.log(myName)
         }
         console.log(sirName)

            function add2() {
                const grandChild = 'Sharath'
                console.log(grandChild)


            }
            add2()
    }
    add1()
    
}
add()

// console.log(sirName)
