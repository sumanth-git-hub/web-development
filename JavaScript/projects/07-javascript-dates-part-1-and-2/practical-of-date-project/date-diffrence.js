const submitDates = document.querySelector('.submit-form')
const user1Input = document.querySelector('.user1')
const user2Input = document.querySelector('.user2')
const displayTextContent = document.querySelector('.display-text-content')
const textElement = document.querySelector('.text-element')


submitDates.addEventListener('submit', (e) => {
    e.preventDefault()
    const user1Details = Date.now() - parseDateFunction(user1Input.value).getTime()
    const user2Details = Date.now() -  parseDateFunction(user2Input.value).getTime()

    const firstUserAgeDifference = user1Details - user2Details
    const secondUserAgeDifference = user2Details - user1Details


    if(user1Details > user2Details) {
        displayTextContent.textContent = 'User 1 is Older than User 2'
        const getDifference = Math.floor(firstUserAgeDifference / 1000 / 60 /60 /24 /365)
        textElement.textContent = `${getDifference} Year, ${new Date(firstUserAgeDifference).getMonth()} Month, ${new Date(firstUserAgeDifference).getDay()} Day Old`
    }
    else if (user1Details < user2Details) {
        displayTextContent.textContent = 'User 2 is Older than User 1'
        const findDifference = Math.floor(secondUserAgeDifference / 1000 / 60 /60 /24 /365)
        textElement.textContent = `${findDifference} Year, ${new Date(secondUserAgeDifference).getMonth()} Month, ${new Date(secondUserAgeDifference).getDay()} Day Old`
    } 
    else {
        displayTextContent.textContent = 'Both are same age'
    }

    // the commented code below is nested inside the function to avoid the repetition of code 
    /*  
    const [dateString, timeString] = user1Input.value.split(' ')
    const [date,month,year] = dateString.split('/').map(el => Number(el) )
    const [hours,minutes] = timeString.split(':').map(el => Number(el) )
    const firstUserUpdate = new Date(year,month -1 ,date,hours,minutes)
    console.log(firstUserUpdate)
    */
    
})

function parseDateFunction(userInputValues) {
    const [dateString, timeString] = userInputValues.split(' ')  // the 'user1Input' is replaced with 'userInputValues' here and also we should remove the value
    const [date,month,year] = dateString.split('/').map(el => Number(el) )
    const [hours,minutes] = timeString.split(':').map(el => Number(el) )
    return new Date(year,month -1 ,date,hours,minutes)
}
