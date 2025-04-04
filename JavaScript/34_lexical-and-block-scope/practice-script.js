'use strict'
console.log('Practice of Lexical Scope and Block Scope')

const scriptScopeName = 'Akash'

function firstUser(){
  const firstUserName = 'Sumanth'
  const firstUserAge = 25
        // firstMove = false
  const location = 'Thirthahalli'
  console.log(scriptScopeName)
  console.log(firstUserName,firstUserAge)
  const secondUserAge = 20

    function secondUser(){
      const secondUserName = 'Sharath'
      console.log(location)
      const findValue = 'more information'
      console.log(secondUserName, secondUserAge)
      const thirdUserName = 'Abhi'

      if(true){
        const hisName = 'Akshay'
        var herName = 'Anu'
        console.log(hisName)
      }
      console.log(herName)
      
        function thirdUser(){
          const thirdUserAge = 18
          console.log(findValue)
          console.log(`Hello my name is ${firstUserName} i am ${firstUserAge} old and i am from ${location}`)
          console.log(thirdUserName,thirdUserAge)
        }
      thirdUser()
      // console.log(herName)
    }
  secondUser()
}
firstUser()