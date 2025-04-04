"use strict";

const hoursHand = document.getElementById("hours");
const minutesHand = document.getElementById("minutes");
const secondsHand = document.getElementById("seconds");

function runClock() {
  let newDate = new Date();

  // get the hours, minutes and seconds
  let hrs = newDate.getHours();
  let mins = newDate.getMinutes();
  let sec = newDate.getSeconds();

  /*
 ` hours calculation
   12 hours = 360 deg
    1 hour = 360/12 = 30 deg
    hrs hours = 30hrs + m/2

    60min = 360deg;
    1min = 360/60 = 6deg
    mins minutes = 6mins
    
    60 sec = 360deg
    1sec = 360/60 = 6deg
    sec seconds = 6sec `
*/

  // rotate hands
  let hrsRotation = 30 * hrs + mins / 2;
  let minsRotation = 6 * mins;
  let secRotation = 6 * sec;

  hoursHand.style.transform = `rotate(${hrsRotation}deg)`;
  minutesHand.style.transform = `rotate(${minsRotation}deg)`;
  secondsHand.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(runClock, 1000);