const container = document.createElement("div");
container.classList.add("detailed-text-content");
container.innerHTML = `<h3>ISO Date Format in Detail</h3>
<p>YYYY-MM-DDTHH:mm:ss.msZ</p>
<ol>
<li>YYYY: Represents the year with four digits (eg, 2004).</li>
<li>MM: Represents the month with 2 Digits (eg, 1 or January).</li>
<li>DD: Represents the day with 2 digits (eg, 1 or first day of the month).</li>
<li>T: Represents the starting of time after it.</li>
<li>HH: Represents hours with 2 digits(24 hours format).</li>
<li>mm: Represents minutes with 2 digits.</li>
<li>ss: Represents seconds with 2 digits.</li>
<li>mss: Represents milliseconds with 3 digits.</li>
<li>Z: Represents timezone offset in the form of HH:mm <br>(eg, +05:30 for UTC+5:30) also we can write only Z, it means UTC time.</li>
</ol>
<p>Here are some examples</p>
<ol>
<li>2024-03-06T18:23:06.682Z (Z indicates that the time is expressed in UTC)</li>
<li>2024-03-06T18:23:06.682+05:30 ("+05:30" indicates that the timezone is 5 hours and 30 minutes ahead of UTC)</li>
<li>2024-03-06T18:23:06.682-07:00 ("-07:00" indicates that the timezone is 7 hours and 0 minutes behind UTC)</li>

</ol>
`;
document.querySelector("body").append(container);

// const newDate = new Date(2024,-1,-0) // this also accept the negative values
// const newDate = new Date('2024-02-17') // if we add the time with "-" its taking as a UTC time thats why you can able to see the output like this "Sat Feb 17 2024 05:30:00 GMT+0530 (India Standard Time)"
// const newDate = new Date('2024-02-17 06:24:06.600') // we can also declare the date like this
// const newDate = new Date('2024 feb 17 06:24:06.600')  // we can also declare the date like this
const newDate = new Date();
console.log(newDate);
console.log(newDate.toDateString()); // this represents the detailed Date overview
console.log(newDate.toLocaleDateString()); // this contains only Date format and we can customize like below
console.log(
  "Full: ",
  newDate.toLocaleDateString("en-GB", { dateStyle: "full" })
);
console.log(
  "Long: ",
  newDate.toLocaleDateString("en-GB", { dateStyle: "long" })
);
console.log(
  "Medium: ",
  newDate.toLocaleDateString("en-GB", { dateStyle: "medium" })
);
console.log(
  "Short: ",
  newDate.toLocaleDateString("en-GB", { dateStyle: "short" })
);

console.log("toString: ", newDate.toString());
console.log("toLocaleString: ", newDate.toLocaleString()); // this contains Date along with the time

console.log(newDate.toTimeString()); // this contains time along with the "GMT+0530 (India Standard Time)"
console.log(newDate.toLocaleTimeString()); // this contains only time
console.log(
  "Full: ",
  newDate.toLocaleTimeString("en-IN", { timeStyle: "full" })
); // display the time in full format
console.log(
  "Long: ",
  newDate.toLocaleTimeString("en-IN", { timeStyle: "long" })
); // display the time in long format
console.log(
  "Medium: ",
  newDate.toLocaleTimeString("en-IN", { timeStyle: "medium" })
); // display the time in full format
console.log(
  "Short: ",
  newDate.toLocaleTimeString("en-IN", { timeStyle: "short" })
); // display the time in Short format


// find the day
function getDayName(findDay) {
  const formatDay = findDay
    .toLocaleDateString("en-GB", { dateStyle: "full" })
    .split(" ")[0];
  return formatDay;
}
getDayName(newDate);
console.log(getDayName(new Date("02/17/1999")));

// find the month
function getMonthName(month) {
  const formatMonth = month
    .toLocaleDateString("en-GB", { dateStyle: "long" })
    .split(" ")[1];
  return formatMonth;
}
getMonthName(newDate);
console.log(getMonthName(new Date("04/19/2004")));


// we can also use the below method to find the day and month easily compared to above code

function findHerBirthday(findDay){  // instead of splitting the value we can also use this method
    return findDay.toLocaleDateString('en-GB', {weekday: "long"})
}
console.log('her birthDay: ',findHerBirthday(new Date('05/02/1998')))

function findHerBirthMonth(month){
    return month.toLocaleDateString('en-GB', {month: "long"})
}
console.log('her birthMonth: ',findHerBirthMonth(new Date('05/02/1998')))


// not recommended method to find month name
const months = [
  // we can avoid creating this variable by using the 'toLocalDateString' refer the above written function
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

console.log(months[new Date('1999/02/17').getMonth()])

// not recommended method to find day
const days = [  // we can avoid creating this variable by using the 'toLocalDateString' refer the above written function
  `Sunday`, 
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];

console.log(days[new Date('2004/04/19').getDay()])


// set methods

const setDate = new Date()

// console.log(setDate)

setDate.setFullYear(2004)
setDate.setMonth(10)
setDate.setDate(14)
setDate.setTime(1100403884444)
setDate.setMinutes(14)
setDate.setSeconds(44)
setDate.setMilliseconds(444)

console.log(setDate)


// UTC 

setDate.setUTCHours(0)
setDate.setUTCMinutes(32)
setDate.setUTCSeconds(10)
setDate.setUTCMilliseconds(400)
setDate.setUTCFullYear(1999)
setDate.setUTCMonth(1)
setDate.setUTCDate(17)
console.log(setDate)


// Static Methods


const herBio = Date.parse('1998-05-02T04:40:44.444')  // Date.parse
console.log('her Bio: ',new Date(herBio))

const checkDob = Date.UTC(1999,1,17)  // Date.UTC
console.log('his Bio: ',new Date(checkDob))