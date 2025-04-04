let [seconds, minutes, hours] = [0, 0, 0];
const displayElement = document.getElementById("display-time");
const playButton = document.getElementById("play-button");
const resetButton = document.getElementById("reset-button");
const switchButton = document.getElementById("switch");
let timer;

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayElement.innerText = h + ":" + m + ":" + s;

  // displayElement.innerText = hours + ":" + minutes + ":" + seconds;
}

function runTimer() {
//   if (timer !== null) {
//     clearInterval(timer);
//   }
  timer = setInterval(() => {
    stopWatch();
  }, 1000);
}

function pauseWatch() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayElement.innerHTML = "00:00:00";
}

playButton.addEventListener("click", () => {
  if (switchButton.classList.contains("fa-play")) {
    switchButton.classList.add("fa-pause");
    switchButton.classList.remove("fa-play");
    runTimer();
  } else {
    switchButton.classList.remove("fa-pause");
    switchButton.classList.add("fa-play");
    pauseWatch();
  }
});

resetButton.addEventListener("click", () => {
  resetTimer();
  switchButton.classList.remove("fa-pause");
  switchButton.classList.add("fa-play");
});
