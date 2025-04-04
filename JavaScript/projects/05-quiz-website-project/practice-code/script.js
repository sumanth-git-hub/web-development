const startButton = document.querySelector('.start-button')
const quizContainer = document.querySelector('.quiz-container')
const entryPage = document.querySelector('.entry-page')
const displayLogo = document.querySelector('.display-logo')
const timerSection = document.querySelector('.timer')
const questionCountsSection = document.querySelector('.question-counts')
const lineElement = document.querySelector('.line-element')
const progressMainSection = document.querySelector('.main-progress-section')
const progressPieChart = document.querySelector('.progress-pie')
const chartElementContainer = document.querySelector('.chart-container')
const scoreLabel = document.querySelector('.scoreTextLabel')
const indicateRight = document.querySelector('.indicate-right')
const indicateWrong = document.querySelector('.indicate-wrong')

const allQuestions = [
    {
        question: `_____ is used to remove the element from the end of the array`,
        answer: [
            {text: 'push()', correct: false},
            {text: 'pop()', correct: true},
            {text: 'concat()', correct: false},
            {text: 'slice()', correct: false},
        ]
    },
    {
        question: 'How do you call a function named myFunction?',
        answer: [
            { text: 'call myFunction()', correct: false },
            { text: 'myFunction()', correct: true },
            { text: 'call function myFunction;', correct: false },
            { text: 'Call.myFunction', correct: false },
        ]
    },
    {
        question: `The ________ method is used to call a function after a certain period of time`,
        answer: [
            { text: 'setInterval()', correct: false },
            { text: 'clearInterval()', correct: false },
            { text: 'clearTimeout()', correct: false },
            { text: 'setTimeout()', correct: true },
        ]
    },
    {
        question: `The ________ Javascript method is used to call a function repeatedly at a specified interval of time`,
        answer: [
            { text: 'clearTimeout()', correct: false },
            { text: 'setTimeout()', correct: false },
            { text: 'getAttribute()', correct: false },
            { text: 'setInterval()', correct: true },
        ]
    },
    {
        question: 'In JavaScript, which of the following is a logical operator?',
        answer: [
            { text: '|', correct: false },
            { text: '&&', correct: true },
            { text: '%', correct: false },
            { text: '/', correct: false },
        ]
    }
]

const questionElement = document.getElementById('question-element')
const answerButtons = document.querySelector('.answer-buttons')
const nextStepButton = document.getElementById('next-button')
// const resultCard = document.getElementById('create-card')

let questionsIndexCount = 0;
let score = 0;


let countTime = 0;
let timeValue = 15;
let lineElementCounter = 0;
let widthValue = 0;
let writeLine = 0;

function setTimings(timeBegins) {
    countTime = setInterval(timeStarts, 1000)
    function timeStarts() {
        timerSection.textContent = '00:' + timeBegins;
        // timeBegins--;

        if(timeBegins <= 9){
            /*
            let addZero = timerSection.textContent;
            timerSection.textContent = addZero
            */
            timerSection.textContent = '00:' + '0' + timeBegins;


            document.querySelector('body').style.backgroundColor = '#D4D69F8C';

        }
        if(timeBegins < 0){
            clearInterval(countTime)
            timerSection.textContent = '00:00';
            document.querySelector('body').style.backgroundColor = '#b80b0b';

            Array.from(answerButtons.children).forEach((doDisable) => {
                doDisable.disabled = true;
                nextStepButton.style.display = 'block'
            })

        }
        if(timeBegins > 9){
        document.querySelector('body').style.backgroundColor = '#CCE2C2';
        }
        timeBegins--;
    }
    // timeStarts()
}

function startLineElement(lineMoment){
    lineElementCounter = setInterval(startNow, 30);
    function startNow(){
        lineMoment += 1;
        // console.log(lineMoment)
        lineElement.style.width = lineMoment + 'px';

        if(lineMoment > 540){
            clearInterval(lineElementCounter);
        }
        
    }
}



startButton.addEventListener('click', (e) => {
    quizContainer.classList.add('open-modal');
    entryPage.classList.add('hide-entry');
    displayLogo.style.display = 'block';
    setTimings(timeValue);
    startLineElement(widthValue);
     document.querySelector('body > footer').style.display = 'block'
})

function startQuiz() {
    questionsIndexCount = 0;
    score = 0;
    showQuestion();
    // questionElement.style.display = 'block'
    // resultCard.style.display = 'none'

    questionElement.classList.remove('create-card')
    nextStepButton.innerHTML = 'Next'
}

let questionNumbers = 1

function showQuestion(){
    
    //remove few elements
    removeElements();

    //display the question
    const currentQuestionIndexCount = allQuestions[questionsIndexCount];
    const serialNumber = questionsIndexCount + 1
    questionElement.innerHTML = serialNumber + '. ' + currentQuestionIndexCount.question

    //display answers
    currentQuestionIndexCount.answer.forEach((printAnswers) => {
        // console.log(printAnswers)
        const answerLabel = document.createElement('button')
        answerLabel.classList.add('choose-answer')
        answerLabel.setAttribute('id','icons-flex')
        answerLabel.innerHTML = printAnswers.text
        console.log(answerLabel)
        answerButtons.appendChild(answerLabel)
        // console.log(answerButtons.appendChild(answerLabel))

        if(printAnswers.correct){
            // answerLabel.innerHTML = printAnswers.text + `<div><img src="./correct.png" alt="correct-icon" class="correct-icon"><img src="./wrong.png" alt="wrong-icon" class="wrong-icon"></div>`
            answerLabel.dataset.correct = printAnswers.correct
            // console.log(printAnswers.correct)
        }
        // adding event listener on each answer label

        answerLabel.addEventListener('click', (event) => {
            clearInterval(countTime);
            clearInterval(lineElementCounter);
            const answerElement = event.target
            const isAnsCorrect = answerElement.dataset.correct === 'true'
           
            if(isAnsCorrect){
                answerElement.classList.add('correct')
                score++
            //    answerElement.innerHTML = printAnswers.text +`<div><img src="./correct.png" alt="correct-icon" class="correct-icon"><img src="./wrong.png" alt="wrong-icon" class="wrong-icon"></div>`
            }
            else {
                answerElement.classList.add('incorrect')
                answerElement.innerHTML = printAnswers.text + `<div><img src="./correct.png" alt="correct-icon" class="correct-icon"><span>You chose<img src="./wrong.png" alt="wrong-icon" class="wrong-icon"></span></div>`
            }
            
            Array.from(answerButtons.children).forEach((answerElement) => {
               if(answerElement.dataset.correct === 'true'){
                console.log(answerElement)
                console.log('Here you find the right answer: ', answerElement.textContent)  // understand the use of textContent
                 answerElement.classList.add('correct')
                 answerElement.innerHTML = answerElement.textContent +`<div><img src="./correct.png" alt="correct-icon" class="correct-icon"><img src="./wrong.png" alt="wrong-icon" class="wrong-icon"></div>`
               } 
               answerElement.disabled = true
            })
            nextStepButton.style.display = 'block'
            // console.log(answerElement)
        })
    })
}

nextStepButton.addEventListener('click',(e) => {
    clearInterval(countTime);
    setTimings(timeValue);
    clearInterval(lineElementCounter);
    startLineElement(widthValue);
    questionCountsSection.innerHTML = `${1 + questionNumbers++} out of ${allQuestions.length} questions`
    if(questionsIndexCount < allQuestions.length){
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

function handleNextButton() {
    questionsIndexCount++
    if(questionsIndexCount < allQuestions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}

function showScore(){
    removeElements();
    nextStepButton.style.display = 'block'
    nextStepButton.style.margin = 'auto'
    nextStepButton.innerHTML = '<<< Retry'
    questionElement.classList.add('create-card')
    lineElement.style.display = 'none'
    clearInterval(countTime);

    progressMainSection.style.display = 'block'
    progressPieChart.style.width = `${score / allQuestions.length * 100}%`
    // progressMainSection.lastElementChild.innerText = ` You have scored ${score / allQuestions.length*100}% in this quiz by answering ${score} out of ${allQuestions.length} Questions`
    indicateRight.innerText = `${score / allQuestions.length*100}%`
    indicateWrong.innerText = `${100 - score / allQuestions.length*100}%`

    chartElementContainer.style.display = 'block'

    const donutElement = document.querySelector('.progress-circle')
    const donutPercentageValue = document.querySelector('.percentageValue')

    let donutProgressValue =  -1; 
    let donutProgressEndingValue = (score / allQuestions.length)*100;
    let speed = 20;

    let startDonut = setInterval(() => {
        donutProgressValue++;
        donutPercentageValue.textContent = `${donutProgressValue}%`;
        console.log(donutProgressValue)
         donutElement.style.backgroundImage = `conic-gradient(#6a5acd ${donutProgressValue * 3.6}deg, rgba(166, 149, 149, 0.379) 0deg)`
        // donutElement.style.backgroundImage = `conic-gradient(from 120deg, #6a5acd ${donutProgressValue * 3.6}deg, rgba(166, 149, 149, 0.379) 0deg)`
        scoreLabel.textContent = `You have scored ${score / allQuestions.length*100}% in this quiz by answering ${score} out of ${allQuestions.length} Questions`

        // console.log(donutProgressValue)
        if(donutProgressValue == donutProgressEndingValue){
            clearInterval(startDonut)
        }
    },speed)

    nextStepButton.addEventListener('click', (e) => {
        window.location.reload()
    })  
    
    questionCountsSection.style.display = 'none'
    timerSection.style.display = 'none'
    // questionElement.innerHTML = `Congratulations 🎉 you've scored ${score} out of ${allQuestions.length}`

     if(score <= 2){
        questionElement.innerHTML = `Ohoo 🥺 you've scored less please try again`
    }
    else {
        questionElement.innerHTML = `Congratulations 🎉 <br> “Keep learning, you have a good score!”`
    }
}

function removeElements() {
    nextStepButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

// progressPieChart.style.width = `${score / allQuestions.length * 100}`


startQuiz()