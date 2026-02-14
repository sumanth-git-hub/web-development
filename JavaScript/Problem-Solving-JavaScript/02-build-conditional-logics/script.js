console.log("Connected");

// 1. Find the Maximum of Three Numbers

//solution for this in function format
const maxOfThree = (a, b, c) => {
  let max;
  if (a >= b && a >= c) {
    max = { a }; // to get the preview of which argument is greater we can set the value inside the {}
  } else if (b >= c) {
    max = { b };
  } else {
    max = { c };
  }
  console.log(max);
  return max;
};
maxOfThree(35, 35, 38);

// solution by using the math method

const findMaxOfThree = Math.max(2, 6, 8);
console.log(findMaxOfThree);

//2. Check if a Number is Positive, Negative, or Zero

const findStatus = (a) => {
  let value;
  if (a === 0) {
    value = "Zero";
  } else if (a > 0) {
    value = "Positive";
  }
  value = "Negative";
  console.log(value);
  return value;
};

findStatus(-9);

//3. Calculate Electricity Bill

const userUnits = 250;
let perUnit = 0

const findElectricityBill = (passUnits) => {
  // console.log(perUnit * passUnits)
  if(passUnits <= 100){
    console.log("<= 100")
   return perUnit = passUnits * 5
  }
  else if(passUnits <= 200){
    console.log("<= 200")
   return perUnit = (100 * 5) + (passUnits - 100) * 7
  }
  else if (passUnits <= 300){
    console.log("<= 300")
   return perUnit = (100 * 5) + (100 * 7) + (passUnits - 200) * 10
  }
  console.log("above 300")
  return perUnit = (100 * 5) + (100 * 7) + (100 * 10) + (passUnits - 300) * 12
}
console.log("User electricity bill is: ₹",findElectricityBill(userUnits))

//4. Check if a Character is a Vowel or Consonant
let checkLetter = "S"
const vowelsArray = ["a", "e", "i", "o", "u"]
// const consonantsArray = ["b", "c", "d", 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
let getStatus;

const getDetails = (letters) => {
 inputLetters = letters.toLocaleLowerCase()
  // console.log(inputLetters)
  if(vowelsArray.includes(inputLetters)){
     getStatus = "vowelsArray"
  }
  // else if (consonantsArray.includes(inputLetters)){
  //      getStatus = "consonantsArray"
  // }
  // by using the regex we can avoid creating the array for remaining letters (consonantsArray)

  else if (/^[a-z]$/.test(inputLetters)){ 
    getStatus = "consonantsArray"
  }
  else {
    getStatus = "Please Enter the Valid Alphabet"
  }
  return  getStatus
}
console.log(getDetails(checkLetter))

// 5. Check if a Year is a Leap Year

let getYear = 1900
let getAnswer;

const isLeapYear = (year) => {
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
     getAnswer = "Leap Year"
  }
  else {
    getAnswer = "Not a Leap Year"
  }
  return getAnswer
}
console.log(isLeapYear(getYear))


//Home Work

//1. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

let checkLetterStatus = `$`
let letterStatus;
console.log(checkLetterStatus.charCodeAt() > 65)

const checkAciCode = (letter) => {
  if((letter.charCodeAt(0) >= 33 && letter.charCodeAt(0) <= 47) || (letter.charCodeAt(0) >= 58 && letter.charCodeAt(0) <= 64)|| (letter.charCodeAt(0) >= 123 && letter.charCodeAt(0) <= 126)){
    letterStatus = "Special Character"
  }
 else if(letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57){
    letterStatus = "Digit"
  }
   else if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90){
       letterStatus = "Upper Case"
    }
    else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122){
      letterStatus = "Lower Case"
    }
    else {
      letterStatus = "Please check the letter"
    }
    return letterStatus
}
console.log(checkAciCode(checkLetterStatus))

//2. Calculate Income Tax Based on Slabs

// Example Logic (example slabs):

// Up to ₹2,50,000 → No tax
// ₹2,50,001 – ₹5,00,000 → 5%
// ₹5,00,001 – ₹10,00,000 → 20%
// Above ₹10,00,000 → 30%

let userIncome = 1500000
let taxAmount;

const calculateTax = (income) => {
  let incomeValue;
  if(income <= 250000){
    console.log("i am zero")
    taxAmount = (income) * 0
  }
  else if (income <= 500000){
    taxAmount = (income - 250000) * 0.05
  }
  else if (income <= 1000000) {
    taxAmount = (income - 250000 - 250000) * 0.20 + 250000 * 0.05
  }
  else {
    console.log("Above 10L")
    taxAmount = (income - 1000000) * 0.30 + 250000 * 0.05 + 250000 * 0.20
  }
  return taxAmount
}
console.log(calculateTax(userIncome).toLocaleString('en-IN') )