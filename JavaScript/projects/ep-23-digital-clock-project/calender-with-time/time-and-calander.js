let today = new Date();
console.log(today);

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const turnTwelve = document.getElementById("d-and-night");

const weekArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const yearArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



date.textContent = (today.getDate() < 10? "0":"") + today.getDate();
day.textContent = weekArray[today.getDay()];
month.textContent = yearArray[today.getMonth()];
year.textContent = today.getFullYear();


 const runTime =  setInterval( function() {
        today = new Date();
        let declareHours = today.getHours();
        hours.textContent = (declareHours < 10? "0":"")+ declareHours;
        minutes.textContent = (today.getMinutes() < 10? "0":"") + today.getMinutes();
        seconds.textContent = (today.getSeconds() < 10? "0":"") + today.getSeconds();

            if(declareHours > 12){
                hours.textContent = (declareHours < 10? "0":"")+ declareHours - 12;  
                turnTwelve.textContent = "PM"
            }
            else {
                turnTwelve.textContent = "AM"
            }
    }, 1000);



