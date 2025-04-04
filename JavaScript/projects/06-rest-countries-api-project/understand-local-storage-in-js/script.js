// const inputField = document.querySelector(".input-field");
// const textContentArea = document.querySelector(".text-content");
// const numberInput = document.querySelector('.input-number')
// const ageElement = document.querySelector('.number-element')

// textContentArea.innerText = localStorage.getItem('myName')

// inputField.addEventListener("input", (e) => {
//   console.log(e.target.value);
// //   localStorage.myName = e.target.value;
//   localStorage.setItem('myName',e.target.value)
//   textContentArea.innerText = localStorage.getItem('myName')
// });

// ageElement.innerText = localStorage.getItem('myAge')
// numberInput.addEventListener('input', (e) => {
//     console.log(numberInput.value);
//     localStorage.setItem('myAge', numberInput.value);
//     ageElement.innerText = localStorage.getItem('myAge')
// })

// all inputs 
const carBrandInput = document.querySelector('.car-brand-input')
const carModelInput = document.querySelector('.car-model-input')
const carVariantInput = document.querySelector('.car-variant-input')
const carRegInput = document.querySelector('.car-reg-input')

// all textElements

const carBrandElement = document.querySelector('.brand')
const carModelElement = document.querySelector('.model')
const carVariantElement = document.querySelector('.variant')
const carRegElement = document.querySelector('.reg-number')

const carDetails = JSON.parse(localStorage.getItem('carDetails')) || {}


carBrandInput.addEventListener('input', (event) => {
  carDetails.carBrand = event.target.value
  console.log(carDetails)
  localStorage.setItem('carDetails', JSON.stringify(carDetails))
  carBrandElement.textContent = carDetails.carBrand
})

carBrandElement.textContent = carDetails.carBrand

carModelInput.addEventListener('input', (e) => {
  carDetails.carModel = e.target.value
  console.log(carDetails)
  localStorage.setItem('carDetails',JSON.stringify(carDetails))
  carModelElement.innerText = carDetails.carModel
})

if(carDetails.carModel) {
  carModelElement.innerText = carDetails.carModel
}

carVariantInput.addEventListener('input', (e) => {
  carDetails.carVariant = e.target.value
  localStorage.setItem('carDetails',JSON.stringify(carDetails))
  carVariantElement.innerText = carDetails.carVariant
})

if(carDetails.carVariant){
  carVariantElement.innerText = carDetails.carVariant
}


carRegInput.addEventListener('input', (event) => {
  carDetails.carRegDetails = event.target.value

  localStorage.setItem('carDetails', JSON.stringify(carDetails))
  carRegElement.textContent = carDetails.carRegDetails
})

if(carDetails.carRegDetails){
  carRegElement.textContent = carDetails.carRegDetails
}