const allQuestions = [
  {
    question: "What is git ignore file?",
    answer: [
      {
        text: "Configuration files specific to your local environment",
        correct: false,
      },
      {
        text: "Specifies which files &directories Git should ignore",
        correct: true,
      },
      { text: 'Ignores the entire "build" directory ', correct: false },
      { text: "Shows the status of files in your repository ", correct: false },
    ],
  },
  {
    question: 'In JavaScript, which of the following is a logical operator?',
    answer: [
        { text: '|', correct: false },
        { text: '&&', correct: true },
        { text: '%', correct: false },
        { text: '/', correct: false },
    ]
},
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
      { text: "<js>", correct: false },
      { text: "<scripting>", correct: false },
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
    ],
  },

  {
    question: "Git merge is used for?",
    answer: [
      {
        text: "Lists or creates branches in your project and merge.",
        correct: false,
      },
      {
        text: "Pulls changes from a remote repository and merge.",
        correct: false,
      },
      { text: "Merges a branch into the current branch.", correct: true },
      {
        text: "Stages a file to be committed and merge the branch",
        correct: false,
      },
    ],
  },
  {
    question: `What is 'this' keyword in js`,
    answer: [
      {
        text: "Refers to the parent object in a class hierarchy",
        correct: false,
      },
      {
        text: "Refers to the object that is currently executing the code",
        correct: true,
      },
      {
        text: "Define a static method or property for a class",
        correct: false,
      },
      { text: "To set Methods in a Class", correct: false },
    ],
  },
];

const questionElement = document.querySelector(".question-h2");
const answerSection = document.querySelector(".answer-section");
const nextButton = document.querySelector(".submit-button");
const scoreSection = document.querySelector('.row span')
const timerSection = document.querySelector('.timer-section')

let questionIndexCount = 0;
let score = 0;

let countTime = 0;
let timeValue = 15;

function setTimings(timeBegins){
  countTime = setInterval(timeStarts, 1000);

  function timeStarts(){
    timerSection.textContent = '00:' + timeBegins;

    if(timeBegins < 9){
      timerSection.textContent = '00:' + '0' + timeBegins;
    }
    if(timeBegins < 0){
      clearInterval(countTime)
      timerSection.textContent = '00:00';

      Array.from(answerSection.children).forEach((disableThem) => {
        disableThem.disabled = true;
      })
      nextButton.style.display = 'block'
    }

    timeBegins--;

  }
}

function startQuiz() {
timerSection.style.display = 'block'
  questionIndexCount = 0;
  score = 0;
  showQuestion();
  nextButton.style.display = "none";
  setTimings(timeValue);
}

function showQuestion() {
  removePreviousQuestions();
  nextButton.textContent = "Next"
  scoreSection.style.display = 'block'
  // setTimings(timeValue);

  const currentQuestion = allQuestions[questionIndexCount];
  const serialNumber = questionIndexCount + 1;
  questionElement.innerText = serialNumber + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((printAnswers) => {
    const answerElement = document.createElement("button");
    answerElement.classList.add("answer-buttons");
    answerElement.innerText = printAnswers.text;
    answerSection.appendChild(answerElement);

    if (printAnswers.correct) {
      answerElement.dataset.correct = printAnswers.correct;
      // console.log(answerElement.dataset.correct)
    }

    answerElement.addEventListener("click", (e) => {
      clearInterval(countTime)
      const checkAnswerElement = e.target;
      const isCorrect = checkAnswerElement.dataset.correct === "true";
      console.log(checkAnswerElement);

      if (isCorrect) {
        checkAnswerElement.classList.add("correct");
        score++;
      } else {
        checkAnswerElement.classList.add("incorrect");
      }

      Array.from(answerSection.children).forEach((verifyAnswer) => {
        console.log(verifyAnswer);
        if (verifyAnswer.dataset.correct === "true") {
          verifyAnswer.classList.add("correct");
        }
        verifyAnswer.disabled = true;
      });
      nextButton.style.display = "block";
    //   scoreSection.appendChild(scoreElement)
    });
  });
}

nextButton.addEventListener("click", (e) => {
  if (questionIndexCount < allQuestions.length) {
    setTimings(timeValue);
    handleNextButton();
    scoreSection.innerText = `${questionIndexCount + 1} out of ${allQuestions.length} Questions`;
  } else {
    startQuiz();
  }
});

function handleNextButton() {
  questionIndexCount++;
  if (questionIndexCount < allQuestions.length) {
    showQuestion();
  } else {
    showScore();
    // scoreSection.style.display = 'none'
  }
}

function showScore() {
  removePreviousQuestions();
  clearInterval(countTime);
timerSection.style.display = 'none'
  scoreSection.style.display = 'none'
  nextButton.style.display = "block";
  nextButton.textContent = "Play again";
  questionElement.textContent = `You have Scored ${score} out of ${allQuestions.length}`;
  const createSection = document.createElement('div')
  createSection.classList.add('score-section')
  answerSection.appendChild(createSection)

    if(score < 3){
      createSection.innerText = `Ohoo 🥺 you've scored less please try again`
    }
    else {
      createSection.innerText =  `Congratulations 🎉  “Keep learning, you have a good score!”`
    }
}

function removePreviousQuestions() {
  // clearInterval(countTime);
   scoreSection.innerText = `${questionIndexCount + 1} out of ${allQuestions.length} Questions`;
  nextButton.style.display = "none";
  while (answerSection.firstChild) {
    answerSection.removeChild(answerSection.firstChild);
  }
}



startQuiz();
