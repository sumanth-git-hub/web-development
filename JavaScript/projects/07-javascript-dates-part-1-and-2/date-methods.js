
const checkDate = new Date()

console.dir(checkDate)
console.log(typeof checkDate)  // type is object

console.log(checkDate.getTime()/1000/60/60/24/365) //converted the milliseconds into year

// console.log(checkDate.toLocaleString('en-GB', {hour12: true}))  // localeString

// console.log(checkDate.toLocaleDateString('en-GB'))  // toLocaleDateString (contains only date/month/year)

console.log('Year: ',checkDate.getFullYear())// getFullYear
console.log('UTC Year',checkDate.getUTCFullYear())  // getUTCFullYear
console.log('Month: ',checkDate.getMonth() + 1)// getMonth
console.log('UTC Month: ',checkDate.getUTCMonth() + 1)// getUTCMonth
console.log('Date: ',checkDate.getDate())// getDate
console.log('UTC Date: ',checkDate.getUTCDate())// getUTCDate
console.log('Day: ',checkDate.getDay()) // getDay
console.log('UTC Day: ',checkDate.getUTCDay()) // getUTCDay
console.log('Hours: ',checkDate.getHours()) // getHours
console.log('UTC Hours: ',checkDate.getUTCHours()) // getUTCHours
console.log('Minutes: ',checkDate.getMinutes()) // getMinutes
console.log('UTC Minutes: ',checkDate.getUTCMinutes()) // getUTCMinutes
console.log('Seconds: ',checkDate.getSeconds()) // getSeconds
console.log('UTC Seconds: ',checkDate.getUTCSeconds()) // getUTCSeconds
console.log('Milliseconds: ',checkDate.getMilliseconds()) // getMilliseconds
console.log('UTC Milliseconds: ',checkDate.getUTCMilliseconds()) // getUTCMilliseconds
// console.log('Time Zone Offset', checkDate.getTimezoneOffset() / -60)  // getTimezoneOffset
// console.dir(checkDate.toString()) //toString
// console.dir(typeof checkDate.toString()) // type is string
console.log(checkDate.toISOString()) // toISOString
// console.log(checkDate.toJSON())  // toJSON
// console.log(checkDate.toUTCString())

// console.log(checkDate.toLocaleDateString('en-GB'))