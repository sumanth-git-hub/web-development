const allCheckBoxes = document.querySelectorAll('.check-circle')
const goalInput = document.querySelectorAll('.name-input')
const goalContainer = document.querySelector('.goal-container')
const progressBarContainer = document.querySelector('.progress-bar-container')
const progressPieChart = document.querySelector('.progress-pie')
const displayPara1 = document.querySelector('.paragraph-5')
const hidePara1 = document.querySelector('.paragraph-1')
const displayPara2 = document.querySelector('.paragraph-6')
const hidePara2 = document.querySelector('.paragraph-3')
const sunImageVector = document.querySelector('.sun-vector-art')
const progressLabel = document.querySelector('.progress-label')


const progressLabels = [
    `Raise the bar by completing your goals!`,
    `Well begun is half done!`,
    `Just a step away, keep going!`,
    `Whoa! You just completed all the goals, time for chill :D`
]

// const allGoals = {}

// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}  // after clearing the local storage we got an error which is unable to read the name to avoid that we should write code like below
const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
    // 'first-input': { name: '',
    //                 completed: false,
    // },
    // 'second-input': {
    //     name: '',
    //     completed: false,
    // },
    // 'third-input': {
    //     name: '',
    //     completed: false,
    // }
}
console.log(allGoals)

let completedGoals = Object.values(allGoals).filter((goals) => goals.completed).length
console.log(completedGoals)

 progressPieChart.style.width = `${completedGoals / goalInput.length * 100}%`
 progressPieChart.firstElementChild.innerText = `${completedGoals}/${goalInput.length} completed`

 progressLabel.innerText = progressLabels[completedGoals]

allCheckBoxes.forEach((findElements) => {
    // console.log(findElements)
    findElements.addEventListener('click',(event) => {
        console.log(event.target)

        const convertArray = [...goalInput].every((convert) => {
            console.log(convert.value)
            return convert.value
        })
        console.log(convertArray)

        

        if(convertArray == true){
            findElements.parentElement.classList.toggle('completed')
            // progressBarContainer.classList.add('completed')
            // displayPara1.style.display = 'block'
            // hidePara1.style.display = 'none'
            displayPara2.style.display = 'block'
            hidePara2.style.display = 'none'

            const inputId = findElements.nextElementSibling.id
            // console.log(inputId)
            // console.log(allGoals[inputId])
            allGoals[inputId].completed = !allGoals[inputId].completed
            localStorage.setItem('allGoals', JSON.stringify(allGoals))

            completedGoals = Object.values(allGoals).filter((goals) => goals.completed).length

            progressPieChart.style.width = `${completedGoals / goalInput.length * 100}%`
            progressPieChart.firstElementChild.innerText = `${completedGoals}/${goalInput.length} completed`

            progressLabel.innerText = progressLabels[completedGoals]
        }
        else {
            progressBarContainer.classList.add('incomplete')
            // displayPara1.style.display = 'block'
            // hidePara1.style.display = 'none'
            displayPara2.style.display = 'block'
            hidePara2.style.display = 'none'
        }
    })
})

goalInput.forEach((letsFocus) => {
    console.log(allGoals[letsFocus.id])

    if(allGoals[letsFocus.id]){
        letsFocus.value = allGoals[letsFocus.id].name

        if(allGoals[letsFocus.id].completed) {
            letsFocus.parentElement.classList.add('completed')
        }
    }


    letsFocus.addEventListener('focus',(event) => {
        progressBarContainer.classList.remove('incomplete')
    })

    letsFocus.addEventListener('input',(event) => {

        if(allGoals[letsFocus.id] && allGoals[letsFocus.id].completed) {
            letsFocus.value = allGoals[letsFocus.id].name
            return
        }


        // allGoals[letsFocus.id].name = letsFocus.value

        // allGoals[event.target.id] = event.target.value
        allGoals[letsFocus.id] = {
            name: letsFocus.value,
            // completed: false,  // removing this completed status because the same we added while declaring the variable (to avoid name read error)
        }
        // console.log(event.target.id)
        // console.log(allGoals)

        localStorage.setItem('allGoals', JSON.stringify(allGoals)) // stored in local storage and also converted the object into string
    })
})

sunImageVector.animate([
    {
        transform: 'translate(50px) rotate(360deg)'
    }
], {
    duration: 4000,
    iterations: Infinity,
    direction: 'alternate'
})