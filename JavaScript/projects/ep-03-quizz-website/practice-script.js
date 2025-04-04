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
  
  let questionIndexCount = 0;
  let score = 0;
  
  function startQuiz() {
    questionIndexCount = 0;
    score = 0;
    (nextButton.style.display = "none"), (nextButton.innerText = "Next");
    showQuestion();
  }
  
  function showQuestion() {
    resetStatePreviousQuestions();
    const printQuestion = allQuestions[questionIndexCount];
    const serialNumber = questionIndexCount + 1;
    questionElement.innerText = serialNumber + ". " + printQuestion.question;
  
    printQuestion.answer.forEach((printAnswer) => {
      const listItems = document.createElement("button");
      listItems.innerText = printAnswer.text;
      listItems.classList.add("answer-buttons");
      console.log(printAnswer.text);
      answerSection.appendChild(listItems);
  
   // this will add the true or false by using dataset 
      if(printAnswer.correct){
          listItems.dataset.correct = printAnswer.correct;
          console.log(printAnswer.correct)
      }
  
      // to add the click function on ech answers
  
      listItems.addEventListener('click', (e) => {
          const selectElement = e.target;
          console.log(selectElement)
          const isCorrect = selectElement.dataset.correct === 'true';
          console.log(isCorrect)
          if(isCorrect){
              selectElement.classList.add('correct');
              score++
          }
          else{
              selectElement.classList.add('incorrect') 
          }
          
          // to disable the button after clicking on the answer
          Array.from(answerSection.children).forEach((selectElement) => {
              if(selectElement.dataset.correct === 'true'){
                  selectElement.classList.add('correct') 
              }
              selectElement.disabled = 'true';
          });
          nextButton.style.display = 'block';
      })
  
    })
  }
  
  function resetStatePreviousQuestions() {
    nextButton.style.display = "none";
    while (answerSection.firstChild) {
      answerSection.removeChild(answerSection.firstChild);
    }
  }
  
  nextButton.addEventListener('click', () => {
    if(questionIndexCount < allQuestions.length){
        handleNextButton();
    }
    else {
        startQuiz();
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
}

function showScore(){
    resetStatePreviousQuestions()
    nextButton.innerText = "Play again"
    nextButton.style.display = 'block'
    questionElement.innerText = `You Scored ${score} out of ${allQuestions.length}`
}

  
  startQuiz();
  