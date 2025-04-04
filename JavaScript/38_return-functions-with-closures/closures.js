// console.log('All about detailed overview on closures')

setTimeout(`console.log('All about detailed overview on closures')`, 3000)

/*
function gtLine() {
    const a = 1

    function finalClos() {
        const b =2
    
        // console.log(a)
    
        function child() {
            console.log(a,b)
        }
        return child
    }
    const endGame = finalClos(1)
    const endGame2 = finalClos(2)
    
    console.dir(endGame)
    console.dir(endGame2)
}
gtLine() 
*/

// the difference of closures value can able to see in the below example code which are saved in different memory
/*
function finalClos() {
    let a = 0
    // console.log(a)

    function child() {
        a++
    }
    return child
}
const endGame = finalClos()
endGame() // the value of the element will change by calling multiple times like this
endGame()
endGame()
endGame()
endGame()
endGame()
const endGame2 = finalClos()

console.dir(endGame)
console.dir(endGame2)
*/


function finalClos() {
    let a = 0
    // console.log(a)

    function child(increment) {
        a = a + increment
    }
    return child
}
const endGame = finalClos()
endGame(4) // passing the increment argument
const endGame2 = finalClos()
endGame2(8)  // passing the increment argument
const endGame3 = finalClos()
endGame3(24)  // passing the increment argument

console.dir(endGame)
console.dir(endGame2)
console.dir(endGame3)

// another example of closure without return function

function doSomenthing() {
    const userName = 'Sharath S S'

    function callBackFunction(){
        console.log(userName)
    }
    console.dir(callBackFunction)
    setTimeout(callBackFunction, 2000)
}
doSomenthing()


/* // with the return function above one is without return function
function doSomenthing() {
    const userName = 'Sharath S S'

    return function callBackFunction(){
        console.log(userName)
    }
    // console.dir(callBackFunction)
    setTimeout(callBackFunction, 2000)
}
// doSomenthing()

const broName = doSomenthing()
console.dir(broName)
setTimeout(broName, 2000)

*/

// one more example

function createOnceFunction(){
    let executed = false

    return function execution(){
        if(!executed) {
            executed = true;
            console.log('Congratulation the function called back');
        }
    }
}
createOnceFunction()

const executionOfFunction = createOnceFunction()
executionOfFunction() // the condition will stay true until this function call back

console.dir(executionOfFunction)

