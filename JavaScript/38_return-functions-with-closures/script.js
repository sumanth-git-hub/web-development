console.log('Returning Functions with Closures in JavaScript')

// first example

// const a = 4
// const b = 6

function outer() {
    const a = 4
    function parentFunction(){
        const b = 6
        
        // function add() {  // another way to write return
        //     console.log(a+b)
        // }
        // return add

        return function add() {  // it appears on console
            console.log(a+b)
        }
    }
    return parentFunction()
}
    const sumanth = outer()
    console.dir(sumanth)




// second practical example 

// debugger
    function helloParent() {
        const s = 4
        function helloSumanth() {
          const p = 8
          return function helloWorld() {  // it appears on console 
            console.log(s+p)
            // console.log('Hello World! returning function with closures')
          }
        }
        return helloSumanth()
      }
      
      const hello = helloParent()
      console.dir(hello)
    //   console.log(hello)




      function digitalMarketing() {
        const z = 'SEO'
        function seo() {
        const x = 'Organic Traffic'
            return function onPage(){
                console.log(`${z} drives ${x} to website`)
            }
        }
        return seo()
      }

      const traffic = digitalMarketing()
      console.dir(traffic)
      console.log(traffic())


      // another practice

      function finalFun() {
        // debugger
        const c = 14
          function secondOuter() {
            const a = 4
            const b = 6
             function returnFun() {
              console.log(a+b+c)
            }
            return returnFun
          }
        return secondOuter()
      }
      const checkfun = finalFun()
      console.dir(checkfun)
      console.log(checkfun())
      