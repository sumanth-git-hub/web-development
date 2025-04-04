const allToolTipSections = document.querySelectorAll(".tool-tip-icon")
// const mangoDBSection = document.querySelector(".mango-db");
const mangoDBSection = document.querySelectorAll(".mango-db");
const expressJSSection = document.querySelectorAll(".express-js");
const reactJSSection = document.querySelector(".react-js");
const nodeJSSection = document.querySelectorAll(".nodejs");
const angularSection = document.querySelector(".angular-js");
const typeText = document.querySelector(".auto-type-element");
const wordsList = ["MangoDB", "Express.JS","React.JS","Node.JS"];
const typeTextNext = document.querySelector(".auto-type-element-next");
const wordsListNext = ["MangoDB", "Express.JS","Angular.JS","Node.JS"];

function autoTypeOn(element, wordsArray){
// const oneWord = "React.JS";
let characterIndex = 0;
let wordIndex = 0;
let reverseType = false; // to execute the reverse typing
let skipInterval = 0;


const stopInterval = setInterval(() => {
    if(skipInterval) {
        skipInterval --;
        return;  
    }
    if(!reverseType){
        skipInterval = 2;
        element.textContent = element.textContent + wordsArray[wordIndex][characterIndex];
        characterIndex++;

        if(element.innerText === "A"){
            element.style.color = "#DD1B16"
        }
    }
    else {
        element.textContent = element.textContent.slice(0, element.textContent.length -1);  //execute the reverse typing
        characterIndex --;
    }
    if(element.textContent.length === 0 &&  reverseType){
        reverseType = false;
        // characterIndex = 0;
        wordIndex++;

        if(wordIndex === 0){
            element.style.color = "#DD1B16"
        }
        if(wordIndex === 1){
            element.style.color = "#FFFFFF"
        }
        if(wordIndex === 2){
            element.style.color = "#61DAFB"
        }
        if(wordIndex === 3){
            element.style.color = "#8CC84B"
        }

    }
    if(wordIndex === wordsArray.length){
        wordIndex = 0;
    }
    if(characterIndex === wordsArray[wordIndex].length){
        // clearInterval(stopInterval)
        reverseType = true;
        skipInterval = 8;
    }
    
    // console.log(characterIndex)
}, 100);
}
autoTypeOn(typeText, wordsList);
autoTypeOn(typeTextNext, wordsListNext);


allToolTipSections.forEach(hoverElement => {
    function parentElementFunction() {
     hoverElement.parentElement.style.border = "1px solid #FFF"
    }

    mangoDBSection.forEach(element => {
        element.addEventListener("mouseenter", (e) => {
            element.parentElement.style.border = "1px solid #47A248"
    })
    element.addEventListener("mouseleave", (e) => {
     parentElementFunction();
    });
    });

    expressJSSection.forEach(expressJs => {
        expressJs.addEventListener("mouseenter", (e) => {
            expressJs.parentElement.style.border = "1px solid #FFFFFF"
           })
           expressJs.addEventListener("mouseleave", (e) => {
            parentElementFunction();
           });
    });
    

reactJSSection.addEventListener("mouseenter", (e) => {
 reactJSSection.parentElement.style.border = "1px solid #61DAFB"
})
reactJSSection.addEventListener("mouseleave", (e) => {
 parentElementFunction();
});

nodeJSSection.forEach(nodeJs => {
    nodeJs.addEventListener("mouseenter", (e) => {
        nodeJs.parentElement.style.border = "1px solid #8CC84B"
       })
       nodeJs.addEventListener("mouseleave", (e) => {
        parentElementFunction();
       });
});

angularSection.addEventListener("mouseenter", (e) => {
    angularSection.parentElement.style.border = "1px solid #DD1B16"
   })
angularSection.addEventListener("mouseleave", (e) => {
    parentElementFunction();
   });
});