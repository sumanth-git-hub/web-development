


function getCarDetails() {

  const carDetails = {
    carBrand: 'VolksWagen',
    carModel: 'Virtus',
    carVariant: 'TSI',
    fuelType: 'Petrol',
    carRegistration: {
      registeredCity: 'Bangalore',
      regNo: 'KA14MB0502',
    },
  carFunction: function(){
      return carDetails.carBrand + ' ' + carDetails.carModel
    }
  }

  // if(carDetails.carRegistration){  // one the method to avoid the error 
  //   console.log(carDetails.carRegistration.regYear)
  // }

  // console.log(carDetails.carRegistration && carDetails.carRegistration.regYear)  // another way to avoid the error

// console.log(carDetails.carRegistration.regYear?.dateOfReg)  // this is the optional chaining way to write the code to avoid the error 

// console.log(carDetails.carRegistration?.['regDate'])

console.log(carDetails.carFunction())
}