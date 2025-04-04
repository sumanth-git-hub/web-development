const questionSection = document.querySelector(".question-section");
const questionButton = document.querySelectorAll(".question-button");
let scorePoints = 0;
const donutElement = document.querySelector('.circle-section')
const donutPercentageValue = document.querySelector('.percentageValue')

let donutProgressEndingValue = scorePoints / questionSection.childElementCount *100;
let donutProgressValue = 0;
let speed = 20;

questionButton.forEach(questionLabel => {
    questionLabel.addEventListener("click", (e) => {
        questionLabel.children[0].classList.toggle("tick-mark");
        if(questionLabel.children[0].classList.contains("tick-mark")){
            runForward();
        }
        else {
            runBackward();
        }
        console.log(scorePoints / questionSection.childElementCount);
    })
});


function runForward() {
    scorePoints ++
    // console.log(scorePoints)
    let donutProgressEndingValue = scorePoints / questionSection.childElementCount *100;

    let startDonut = setInterval(() => {
        donutProgressValue++;
        donutPercentageValue.textContent = `${donutProgressValue}%`;
        console.log(donutProgressValue)
         donutElement.style.backgroundImage = `conic-gradient(#6a5acd ${donutProgressValue * 3.6}deg, rgba(166, 149, 149, 0.379) 0deg)`
        // if(donutProgressValue == donutProgressEndingValue){
        //     clearInterval(startDonut)
        // }
    },speed);

    setTimeout(() => {
        clearInterval(startDonut);
    }, 500);
};


function runBackward() {

    scorePoints --
            // console.log(scorePoints)
            donutProgressEndingValue = scorePoints / questionSection.childElementCount *100;

    let startDonut = setInterval(() => {
        donutProgressValue--;
        donutPercentageValue.textContent = `${donutProgressValue}%`;
        console.log(donutProgressValue)
         donutElement.style.backgroundImage = `conic-gradient(#6a5acd ${donutProgressValue * 3.6}deg, rgba(166, 149, 149, 0.379) 0deg)`
        // if(donutProgressValue == donutProgressEndingValue){
        //     clearInterval(startDonut)
        // }
    },speed)
   
    setTimeout(() => {
        clearInterval(startDonut);
    }, 500);
    
}