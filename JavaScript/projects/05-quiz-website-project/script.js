const allQuestions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answer: [
            { text: '&lt;js&gt;', correct: false },
            { text: '&lt;scripting&gt;', correct: false },
            { text: '&lt;javascript&gt;', correct: false },
            { text: '&lt;script&gt;', correct: true },
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
            { text: 'setTimeout()', correct: false },
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
const chooseAnswers = document.querySelector('.choose-answer')

let questionIndexCount = 0
let score = 0

function startQuiz() {
    questionIndexCount = 0;
    score = 0;
    nextStepButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    //to hide the HTML elements where we hardcoded the answers 
    removeElements();
    //to display the question on respective element
    let currentQuestion = allQuestions[questionIndexCount];
    let serialNumber = questionIndexCount + 1;
    questionElement.innerHTML = serialNumber + '. ' + currentQuestion.question;

    // to display the answers on respective elements
    currentQuestion.answer.forEach((printAnswers) => {
        const button = document.createElement('button')

        button.innerHTML = printAnswers.text
        button.classList.add('choose-answer')
        // console.log(printAnswers)
        answerButtons.appendChild(button)

        // this will add the true or false by using dataset 
        if(printAnswers.correct){
            button.dataset.correct = printAnswers.correct;
        }

        // to add the click function on ech answers
        button.addEventListener('click', (event) => {
            const selectButton = event.target;
            const isCorrect = selectButton.dataset.correct === 'true';
            if(isCorrect){
                selectButton.classList.add('correct')
                score++
            } else {
                selectButton.classList.add('incorrect')
            }

            // to disable the button after clicking on the answer

            Array.from(answerButtons.children).forEach((selectButton) => {
                if(selectButton.dataset.correct === 'true'){
                    selectButton.classList.add('correct');
                }
                selectButton.disabled = 'true';
            });
            nextStepButton.style.display = 'block';
        })
    })
}

function removeElements() {
    nextStepButton.style.display = 'none'
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

nextStepButton.addEventListener('click', (e) => {
    if(questionIndexCount < allQuestions.length){
        handleNextButton();
    }
    else {
        startQuiz()
    }
})

function handleNextButton() {
    questionIndexCount++;
    if(questionIndexCount < allQuestions.length){
        showQuestion();
    }
    else {
        showScore();
    }
    
    function showScore() {
        removeElements();
        questionElement.innerHTML = `You Scored ${score} out of ${allQuestions.length}`
        nextStepButton.innerHTML = `Play Again`
        nextStepButton.style.display = 'block'
    }
}


startQuiz() 