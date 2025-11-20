import React from "react";

// here i wrote how to convert the if else condition into switch statement and convert the switch statement into object format

const testScript = () => {
  return <div>testScript</div>;
};

export default testScript;
/*

// else if condition

const testObject = (number) => {
  if(number === 1){
    return "Sunday"
  }
  else if (number === 2) {
    return "Monday"
  }
  else if (number === 3){
    return "Tuesday"
  }
  else if (number === 4){
    return "Wednesday"
  }
  else if (number === 5){
    return "Thursday"
  }
  else if (number === 6){
    return "Friday"
  }
  else if (number === 7){
    return "Saturday"
  }
  else {
    return "The number you entered is not matching with the weekdays"
  }
}
*/

/*
// switch case condition
const testObject = (number) => { 

  switch (number) {
    case 1:
      return "Sunday"  
    case 2:
      return "Monday"  
    case 3:
      return "Tuesday"  
    case 4:
      return "Wednesday"  
    case 5:
      return "Thursday"  
    case 6:
      return "Friday"  
    case 7:
      return "Saturday"  
    default:
     return "The number you entered is not matching with the weekdays"
  }

}
*/

// converted the switch case statement to object

const testObject = (number) => {
  let weekdays = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  }[number];
  return weekdays || "The number you entered is not matching with the weekdays";
};

// console.log(testObject(0));
// console.log(testObject(1));
// console.log(testObject(2));
// console.log(testObject(3));
// console.log(testObject(4));
// console.log(testObject(5));
// console.log(testObject("Hello"));
