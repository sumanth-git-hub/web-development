let userInput = document.getElementById('date');
// userInput.min = new Date().toISOString().split('T')[0]; //to calculate only future value we add .min
userInput.max = new Date().toISOString().split('T')[0]; //to calculate only past value we add .max
const calculateAgeButton = document.querySelector('.calculate-age-button');
let results = document.getElementById('results');


calculateAgeButton.addEventListener('click', () => {
    let birthDate = new Date(userInput.value)
   

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    console.log(m1)

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    console.log(m2);

    let d3,m3,y3

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1
    } else {
        y3--;
        m3 = 12 + m2 - m1
    }

    if(d2 >= d1){
        d3 = d2 -d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1
    }

    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    results.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old`
})

function getDaysInMonth(year, month){
    console.log(new Date(year, month, 0).getDate())
    return new Date(year, month, 0).getDate();
}