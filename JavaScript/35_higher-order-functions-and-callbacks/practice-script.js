console.log('Higher Order Function Practice')


function learnFrontendDev(ele){
    // console.log(typeof b)
    console.dir(ele);
    ele()
}

/*
learnFrontendDev('Welcome to Web Development')  // string as a parameter
learnFrontendDev(1999) // number as a parameter
learnFrontendDev({userName: 'Sumanth', userSecondName: 'S S'}) // object as a parameter
learnFrontendDev(['Toyota','volkswagen']) // array as a parameter

// console.log(learnFrontendDev)
console.dir(learnFrontendDev)

learnFrontendDev.hisName = 'Sharath'
learnFrontendDev.hisAge = 20
*/


//normal way of writing a call back function
function callbackFun(){
    console.log('Welcome to Frontend Development')
}
learnFrontendDev(callbackFun)

callbackFun.userName = 'Sumanth'
callbackFun.userSecName = 'S S'

// another way of writing a call back function
learnFrontendDev(function callbackFun(){
    console.log('Welcome to Frontend Development')
    callbackFun.userName = 'Sumanth'
    callbackFun.userSecName = 'S S'
})

//writing anonymous call back function

learnFrontendDev(function(){
    console.log('Welcome to Frontend Development')
})

// callbackFun() // instead of callback to the parameter from here we used the call back in the name of ele() above that also serves the same
// const s = callbackFun

// s.userage = 25

// console.dir(s)

// learnFrontendDev('Hello')


console.log('Second practice of higher order function')

function investmentsAndInsurance(elements){
    console.dir(elements)
    elements()
}

function finance(){
    console.log('Welcome to Finance / Normal way of writing')
}
investmentsAndInsurance(finance)
    finance.stockMarket = true
    finance.mutualFunds = true
    finance.insurance = true
    finance.banking = !!0
// finance()

// named callback function of investmentsAndInsurance
investmentsAndInsurance( function finance(){
    finance.stockMarket = true
    finance.mutualFunds = true
    finance.insurance = true
    finance.banking = !!0
    console.log('Welcome to Finance / Named callback function')
})
// finance.stockMarket = true

// anonymous callback function of investmentsAndInsurance
investmentsAndInsurance( function(){
    finance.stockMarket = true // these additional object method won't work here because it's anonymous function 
    finance.mutualFunds = true // these additional object method won't work here because it's anonymous function
    finance.insurance = true // these additional object method won't work here because it's anonymous function
    finance.banking = !!0 // these additional object method won't work here because it's anonymous function
    console.log('Welcome to anonymous callback function')
})