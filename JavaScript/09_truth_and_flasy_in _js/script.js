debugger
Boolean(0)

var falseValue = Boolean(0)
let falseValue2 = Boolean(-0)
const falseValue3 = Boolean('')
const falseValue4 = Boolean(NaN)
const falseValue5 = Boolean(undefined)
const falseValue6 = Boolean(null)

console.log(falseValue, falseValue2, falseValue3, falseValue4, falseValue5, falseValue6)


// true values are Infinity

Boolean(1)
var trueValue = Boolean(1)
let trueValue2 = Boolean(-1)
const trueValue3 = Boolean(' ')
const trueValue4 = Boolean(Infinity)

console.log(trueValue, trueValue2, trueValue3, trueValue4)