console.log('All about Rest Parameter')

const spreadOperatorVar = [10,20,30,40]

function useRestParameters(a,b,...parameter){
    console.log('a = ',a,'b =',b)
    console.log('parameter: ',parameter)
    let bringSum = 0
    for(let i = 0; i < parameter.length; ++i) {
        bringSum += parameter[i]
        // console.log(i,bringSum, parameter[i])
    }
    return bringSum
}
// console.log(useRestParameters(10,20,30,40,50,60))
console.log(useRestParameters(...spreadOperatorVar,50,60,70))

// used reduce method with parameter


function reduceWithRest(...parameter1){
    console.log('parameter: ',parameter1)
    return parameter1.reduce((accumulator,current,index) => accumulator + current)
}
console.log(reduceWithRest(...spreadOperatorVar))

// convert argument into array

function convertArray(){
    console.log('Argument :',arguments)
    console.log('Argument Converted to Array : ',[...arguments])
    return [...arguments].reduce((accumulator,current,index) => accumulator + current)
}
console.log(convertArray(4,8,12,16,20))

// another way to convert the argument into array

function fromConvert() {
    console.log('Arguments :',arguments)
    console.log('Argument converted to Array :',Array.from(arguments))
    return Array.from(arguments).reduce((accumulator,current,index) => accumulator + current)
}
console.log(fromConvert(15,30,45,60))

// when array get spread operator

const spreadOperator = [11,22,33,44,55]
console.log(spreadOperator)
console.log(...spreadOperator)

function allTogether(...restParameter){
    console.log('rest parameter before:',restParameter)
    return restParameter.reduce((accumulator,current) => accumulator + current)
}
console.log(allTogether(...spreadOperator))

// may be this is bug (fixed missed i < )

const restParameter1 = ((...useParameter) => {
    console.log('parameter: ',useParameter)
        let calRest = 0
    for(let i = 0; i < useParameter.length; ++i){
        calRest += useParameter[i]
    }
    return calRest
})
console.log(restParameter1(2,4,6,4,8,10))