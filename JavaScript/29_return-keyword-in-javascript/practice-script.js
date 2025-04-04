console.log('Practice return value')

function findValue(a,b){
    // console.log(a * b)
    return a * b
}

const crossVerify = findValue(11 +5 , 2+2)
console.log(crossVerify)


function myBio(myName,myAge,myProf){
    if(!myName){
        myName = 'Sumanth'
    }
    // console.log(`Hello my name is ${myName} i am ${myAge} years old and working as a ${myProf} in Digit Insurance`)
    return(`Hello my name is ${myName} i am ${myAge} years old and working as a ${myProf} in Digit Insurance`)
}

myBio(undefined,25,'frontend developer')
console.log(myBio(undefined,25,'frontend developer'))

// const findMyDetails = myBio(undefined,25,'frontend developer')

// console.log(findMyDetails)
