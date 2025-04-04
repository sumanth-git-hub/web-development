const userAge = 22;

let isSchoolStudent = (userAge >= 5) && (userAge <= 18);
let isCollageStudent = (userAge >= 18) && (userAge <= 24);

var isStudent = (isSchoolStudent || isCollageStudent);

const andResult = (2 && 0)
const orResult = (2 || 0)

const andResult2 = '' && 'Hello World!'
const orResult2 = '' || 'Hello World!'

const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null

const andResult4 = 'Hello' && -4 + 4
const orResult4 = undefined || 8 + 4 * 2

var logResults = console.log('Hello World!')

const andResult5 = 'Hello' && console.log('Hello World!')
const orResult5 = undefined || console.log('Hello World!')

var falseResultAnd = !null && 4 + 4
console.log(Boolean(falseResultAnd))

var falseResultOr = !null || !!undefined
console.log(Boolean(falseResultOr))