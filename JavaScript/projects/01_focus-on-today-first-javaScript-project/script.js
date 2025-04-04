const allCheckBoxes = document.querySelectorAll('.check-box')
const allInputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')
const rotateImage = document.querySelector('[alt="sun-image"]')

allCheckBoxes.forEach(checkboxes => {
    checkboxes.addEventListener('click', (event) => {
        // console.log('clicked')
       const findInputValues = [...allInputFields].every((findValues) => {
            console.log(findValues.value)
            return findValues.value
        })
        console.log(findInputValues)
        if(findInputValues){
            checkboxes.parentElement.classList.toggle('completed')
            progressValue.style.width = '33.33%'
        } else{
            progressBar.classList.add('display-error')
            // errorLabel.style.display = "block" // to avoid inline style we can write in other method
        }
        
    })
});


allInputFields.forEach((input) => {
    input.addEventListener('focus',() => {
        progressBar.classList.remove('display-error')
    })
})

// all about sliding the image

// rotateImage.animate([
//     {
//         /* transform: rotate(360deg); */
//         transform:' translate(0)'
//     },
//     {
//         /* transform: rotate(360deg); */
//         transform:' translate(100px)'
//     }
// ], {
//     duration: 4000,
//     direction: "alternate",
//     iterations: Infinity,
// })

// all about rotating the image
rotateImage.animate([
    {
        transform: 'rotate(360deg)'
    }
],{
    duration: 4000,
    direction: "alternate",
    iterations: 2,
})