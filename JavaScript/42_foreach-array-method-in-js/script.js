const myCars = ['Innova','Virtus','Slavia','Tiagun','Honda Elevate']

for(const printMyCars of myCars){  // by using for of method print the values of array
    console.log(printMyCars)
}

myCars.forEach(function(cars){  // print the values of array by using forEach method
    console.log(cars.toLocaleLowerCase())
})

 myCars.forEach((cars) => console.log(cars.toUpperCase())) // print the values of array by using arrow function expression 

// after using the forEach method we used to get return value is undefined to avoid that we can use map instead of forEach

// map method is written by using arrow method
myCars.map((cars)=> {
    console.log(cars)
    return cars
})

// writing the map method in normal way 
myCars.map(function(printMyCars){
    console.log(printMyCars)
    return printMyCars
} )


