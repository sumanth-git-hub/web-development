
// import { usersData, getCarDetails as carDetails } from "./usersData.js";  //  (1st method)changed the variable name (getCarDetails to carDetails) of other sheet while importing

// console.log(usersData)
// console.log(carDetails)

// clubbed default and named export method together from the same sheet (userData sheet)  // (2nd method)

// import carDetails, { usersData, carOwner } from "./usersData.js";

// console.log(usersData)
// console.log(carDetails)
// console.log(carOwner())

import * as something from "./usersData.js";  // (3rd method)by using this method we can import default and named export in one line of code
console.log(something)
console.log(something.carOwner())  // splitted the data to display specific details
console.log(something.default)
console.log(something.usersData)




const getCarDetails = {  // what if i use the same variable name in the present document (getCarDetails), to avoid the conflict i have changed the variable name of other sheet while importing see above code
  carBrand: 'Skoda',
  carModel: 'Slavia',
  carRegNo: 'KA14SP1702'
}
console.log(getCarDetails)


import yesDefaultExportData from "./productsData.js";  // importing the default export data without {}, naming doesn't matter when it comes to default export method but it is not the same in named export

console.log(yesDefaultExportData)




