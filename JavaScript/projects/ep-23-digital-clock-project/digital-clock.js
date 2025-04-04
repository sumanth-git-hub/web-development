const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secElement = document.getElementById("sec");
const dayOrNightElement = document.getElementById('day-night');

setInterval(() => {
  const startClock = new Date();

  let declareHours = startClock.getHours();
//   console.log(declareHours)

  hoursElement.textContent = (declareHours < 10?"0":"") + declareHours
    
  minsElement.textContent =
    (startClock.getMinutes() < 10 ? "0" : "") + startClock.getMinutes();
  secElement.textContent =
    (startClock.getSeconds() < 10 ? "0" : "") + startClock.getSeconds();
    dayOrNightElement.innerText = 'AM'
    if(declareHours > 12){
        dayOrNightElement.innerText = 'PM'
        declareHours = declareHours - 12;
        hoursElement.textContent = (declareHours < 10?"0":"") + declareHours
    }

}, 1000);
