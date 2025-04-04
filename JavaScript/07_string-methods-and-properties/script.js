const message = 'Hello World!'
// property of String
console.log(message.length)

// Methods of String (without arguments)

// console.log(message.toLocaleLowerCase()) - another way to write directly from message
const lowerCaseMessage = message.toLocaleLowerCase()
console.log(lowerCaseMessage)

// console.log(message.toUpperCase())  - another way to write directly from message
const UpperCaseMessage = message.toUpperCase()
console.log(UpperCaseMessage)

const uselessMessage = '   Hello World!.   '
const finalMessage = uselessMessage.trim()
console.log(finalMessage)

// how to add multiple methods in one line
console.log(uselessMessage.trim().toLocaleLowerCase().toUpperCase())
const chainMethod = uselessMessage.trim().toLocaleLowerCase().toUpperCase()

console.log(uselessMessage.trimStart())

console.log(uselessMessage.trimEnd())


// here we talk about string methods with argument

// all about includes() method
const argumentFinalMessage = 'Hello My Name is Sumanth s s'
const includeMessage = argumentFinalMessage.includes('My Name is Sumanth')
console.log(includeMessage)

{const includeMessage = argumentFinalMessage.includes('My Name is Sharath')
console.log(includeMessage)}

// all about indexOf() method
const indexMessage = argumentFinalMessage.indexOf('S')
console.log(indexMessage)

{
    const indexMessage = argumentFinalMessage.indexOf('P')
console.log(indexMessage)
}

// all about replace() and replaceAll() method
const replaceMessage = argumentFinalMessage.replace('Hello', 'Hi')
console.log(replaceMessage)

{
    const replaceMessage = argumentFinalMessage.replaceAll('s', 'S')
    console.log(replaceMessage)
}

// all about concat() method
const concatMessage = message.concat(' ', replaceMessage)
console.log(concatMessage)

// all about padStart() and padEnd() method
const lastFourDigits = '0643'
const maskedDigits = lastFourDigits.padStart(16, 'X')
console.log(maskedDigits)

{
const lastFourDigits = '0643'
const maskedDigits = lastFourDigits.padEnd(16, 'X')
console.log(maskedDigits)
}


// all about charAt() method
const charAtMessage = argumentFinalMessage.charAt(17)
console.log(charAtMessage)

// all about charCodeAt() method
const charCodeAtMessage = argumentFinalMessage.charCodeAt(17)
console.log(charCodeAtMessage)

// all about split() method
const splitMessage = argumentFinalMessage.split(' ')
console.log(splitMessage)


// String Template literals  

const concatenatedStringTemplateMessage = `my bank account number ends with `.concat(lastFourDigits.padEnd(16, 'X'))
console.log(concatenatedStringTemplateMessage)

const stringTemplateMessage = `my bank account number ends with ${lastFourDigits.padStart(16, '*')}.`
console.log(stringTemplateMessage)

const bankBalance = '1240'
const stringTemplate2 = `₹${bankBalance} get credited to your account successfully from Digit Insurance`
console.log(stringTemplate2)


// const stringTemplate3 = `My Bank Account balance is ₹${lastFourDigits} i borrowed with my friend & his credit card number ends with ${lastFourDigits.padStart('16','*')}`
// console.log(stringTemplate3)