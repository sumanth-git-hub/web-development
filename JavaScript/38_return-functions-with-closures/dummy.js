console.log('Return function with closures')

// two layer example of closure and returning function

function frontEndDev(){
    const a = 3
    const b = 1

    function JavaScript(){
        const c = 4

            return function anuragPlayList(){
                console.log(a+b+c)
            }
    }
   return JavaScript()
}

const webDev = frontEndDev()
console.dir(webDev)
webDev()

// three layer example for better understanding of closures with return function

function digitalMarketing(){
    const organicTraffic = 'SEO'

        function typesOfSeo(){
            const seoType1 = 'White hat SEO'
            const seoType2 = 'Black hat SEO'

                function whiteHatSeo(){
                    const methodSeo1 = 'On page SEO'
                    const methodSeo2 = 'Off page SEO'
                    const methodSeo3 = 'Tech SEO'

                       return function aboutSeo(){
                            console.log(`Understand what is ${organicTraffic} 2 types of seo are ${seoType1},${seoType2} and 3 types of whiteHatSEO practices are ${methodSeo1},${methodSeo2},${methodSeo3}`)
                        }
                }
                return whiteHatSeo()
        }
        return typesOfSeo()
}
const understandOraganicMar = digitalMarketing()
console.dir(understandOraganicMar)
understandOraganicMar()

// writing return value as normal

function parentFunction(){
    const s = 4
        function childFunction(){
            const p = 2
                function returnFun(){
                    console.log(s + p)
                }
                return returnFun
                // return function returnFun(){
                //         console.log(s + p)
                //     }
                }
                return childFunction()
        } 

const checkParent = parentFunction()
console.dir(checkParent)
checkParent()

// closures concept to understand

console.log('all about closures')

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


// another example
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

// one more example

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
/*
function doSomenthing() {
    const userName = 'Sharath S S'

    function callBackFunction(){
        console.log(userName)
    }
    console.dir(callBackFunction)
    setTimeout(callBackFunction, 2000)
}
doSomenthing()
*/

// with the return function above one is without return function
function doSomenthing() {
    const userName = 'Sharath S S'

    return function callBackFunction(){
        console.log(userName)
    }
    // console.dir(callBackFunction)
    // setTimeout(callBackFunction, 2000)
}
// doSomenthing()

const broName = doSomenthing()
console.dir(broName)
setTimeout(broName, 2000)