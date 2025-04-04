const calculateButton = document.querySelector('.calculate-age-button');
let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];
const resultElement = document.getElementById('results');
const newResultsElement = document.getElementById('new-results');
console.log(userInput.max);


calculateButton.addEventListener('click', () => {
    let birthDate = new Date(userInput.value)
    console.log(birthDate)

    let dateOfBirth = birthDate.getDate()
    let monthOfBirth = birthDate.getMonth() + 1;
    let yearOfBirth = birthDate.getFullYear();
    console.log(dateOfBirth)

    let currentDate = new Date()
    
    let presentDate = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    console.log(currentMonth)

    console.log(currentYear - yearOfBirth);
    console.log(presentDate - dateOfBirth);
    console.log(currentMonth - monthOfBirth);

    let findYear, findMonth, findDate

    findYear = currentYear - yearOfBirth;

    if (currentMonth >= monthOfBirth){
        findMonth = currentMonth - monthOfBirth
    }
    else {
        findYear--;
        findMonth = 12 + currentMonth - monthOfBirth
    }

    if(presentDate >= dateOfBirth){
        findDate = presentDate - dateOfBirth
    }
    else {
        findMonth--;
        findDate = getDaysInMonth(yearOfBirth, monthOfBirth) + presentDate - dateOfBirth
    }

    console.log(findDate)

    if(findMonth <= 0){
        findMonth = 11;
        findYear--;
    }
    // resultElement.innerHTML = `You're ${findYear} year ${findMonth}  month and ${findDate}days old`
    let monthElement = document.querySelector('.month')
    let daysElement = document.querySelector('.days')
    let yearElement = document.querySelector('.year')
    if(findMonth > 1){
        monthElement.innerText = `${findMonth}  months`
    }
    else {
        monthElement.innerText = `${findMonth}  month`
    }

    if(findDate > 1){
        daysElement.innerText = `${findDate} days`
    }
    else {
        daysElement.innerText = `${findDate} day`
    }
    newResultsElement.style.display = "block"
    resultElement.style.display = 'none'
    newResultsElement.innerHTML = `You're <span>${findYear} years</span> , <span>${monthElement.innerText}</span> and <span>${daysElement.innerText}</span> older `
})


function getDaysInMonth(year,month){
    console.log(new Date(year,month,0).getDate())
    return new Date(year,month,0).getDate();
}