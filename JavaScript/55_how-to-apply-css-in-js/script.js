console.log("document.querySelector('a').style : ",document.querySelector('a').style)

const colorH1 = document.querySelector('h1').style.color = ('yellowgreen')  // normal way to add the css in javaScript (DOM Manipulation)

const h1Var = document.querySelector('h1')
h1Var.style.color = ('red')  // styling the declared variable instead of writing (document.querySelector('h1').style.color = 'red')
h1Var.style.backgroundColor = ('#70e425')

const allAnchors = document.querySelectorAll('a')

// const changeColor = allAnchors.style.color = 'orange'

// for(let i = 0; i < allAnchors.length; ++i){  // for loop used to loop the anchor texts color in bulk
//     allAnchors[i].style.color = 'orange'
// }

// for(const ofColor of allAnchors){ // for.. of loop used to concise the code
//     ofColor.style.color = 'orange'
// }

allAnchors.forEach((tryEach) => { // used forEach method to concise the above code (** for of)
    // tryEach.style.color = 'orange'
    // tryEach.style.textDecorationLine = 'none'
    // tryEach.style.fontFamily = 'cursive'
    // tryEach.style.fontStyle = 'italic'
    // tryEach.style.fontSize = '14px'

    console.log(tryEach.style.cssText)  // only empty lines can able to see on console

    // css properties are declared same as stylesheet when you use 'cssText' property and when compared to above commented lines this method is concise
    // tryEach.style.cssText = `  
    // color: orange;
    // text-decoration-line: none;
    // font-family: cursive;
    // font-style: italic;
    // font-size: 14px;`

    
    // tryEach.setAttribute('class','tryEachBest')   // setAttribute
    // tryEach.className = 'tryEachBest'   // another way to setAttribute
    tryEach.setAttribute('id','textDecoration')

    console.log(tryEach.classList)  // displays all of the classes are present in respective HTML element
    tryEach.classList.add('tryEachBest')  // used to add the class name along with pulling the css style from stylesheet
    // tryEach.classList.remove('inline-class')
}) 

document.querySelector("#textDecoration").classList.add('high-specificity')  // used 'classList.add' to add the additional class name 

// document.querySelector("body > p > code:nth-child(1) > a").classList.add('high-specificity')

document.querySelector('#textDecoration').classList.remove('high-specificity') // used 'classList.add' to remove the additional class name 

 const classListToggle =   document.querySelector('#textDecoration').classList.toggle('high-specificity') // add the class name at first attempt (opened toggle)
 console.log(classListToggle)
 console.log(document.querySelector('#textDecoration').classList.toggle('high-specificity'))  // remove the class name at second attempt (closed toggle)