console.log('For of loop in JavaScript')

let myCars = ['Innova','Virtus','Elevate','Taigun']

// normal for loop used

for(let i = 0; i < myCars.length; ++i){
  console.log(`${i + 1}.${myCars[i]} written on for loop`)
}

// used for of loop 

for(var printCars of myCars){
  console.log(printCars, 'used for of to print')
}

// used forEach method 
myCars.forEach(function(printCars){
  console.log(printCars, 'Used forEach method')
});

// used forEach arrow method

myCars.forEach ((printCars) => console.log(printCars,'Used forEach method in arrow'))

// used map to avoid undefined error with the above results

// myCars.map((printCars) => console.log(printCars, '(written by using map method to avoid undefined in the above result on console)'))

myCars.map((printCars) => {
  console.log(printCars, '(written by using map method to avoid undefined in the above result on console)')
  return printCars
})

// created an object below to use the for in loop 

const carDetails = {
  carBrand: 'Toyota',
  carModel: 'Innova',
  regYear: 2024,
  carVarient: 'MUV',
  carColor: 'Pearl White',
  carInsStatus: true
}

// used for in loop to print the values of object 

for(const carKeys in carDetails){
  console.log(`${carKeys}: ${carDetails[carKeys]}`)
}

// we can't use for of directly to the object becouse it is not a iterable so we can use object.keys, values and entries to print the values of object with the help of for of..

const carKeys = Object.keys(carDetails)
for(const verifyKeys of carKeys){
  console.log(verifyKeys,':', carDetails[verifyKeys])
}

const carValues = Object.values(carDetails)
for(verifyValuse of carValues){
  console.log(verifyValuse)
}

const carEntries = Object.entries(carDetails)
for(verifyEntires of carEntries){
  console.log(verifyEntires)
}


