console.log('Recalling the Selecting Elements by Using DOM Methods')

console.log(document.getElementsByTagName('img'))  // used getElementsByTagName

const defaultImages = document.images // used default Images selector directly inside the document
console.log(defaultImages)

const selectClassName = document.getElementsByClassName('one-image')[0] // used getElementsByClassName to select and Manipulate
selectClassName.src = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-interior-dashboard.jpeg?isig=0&q=80'
selectClassName.alt = 'VolksWagen Virtus Interior Image'
console.log(selectClassName)

const selectId = document.getElementById('unique-id') // used getELementById to select and manipulate
selectId.src = 'https://www.cars24.com/new-cars/_next/image/?url=https%3A%2F%2Fcdn.24c.in%2Fprod%2Fnew-car-cms%2FVolkswagen_Virtus_interior_3_edited_df06e4c6b1.jpg&w=828&q=75'
selectId.alt = 'Virtus airbag and interior image'
console.log(selectId)

const useQuerySelector = document.querySelector('[alt="javascript contents image"]') // used querySelector to select and manipulate
useQuerySelector.src = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/101055/virtus-interior-gear-shifter-gear-shifter-stalk-2.jpeg?isig=0&q=80'
useQuerySelector.alt = 'gear lever of virtus'
console.log(useQuerySelector)

const useQuerySelectorAll = document.querySelectorAll('.one-image')


const listOfImages = [
    'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20220308120454_VTT6.jpg&w=736&h=488&q=75&c=1',
    'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20220308030850_Headlamp_on.jpg&w=736&h=488&q=75&c=1',
    'https://www.autobics.com/wp-content/uploads/2022/03/2022-Volkswagen-Virtus-Tail-Lamp.jpg.webp'
]

// useQuerySelectorAll[0].src = listOfImages[0]  // very common way to add manipulate images 
// useQuerySelectorAll[1].src = listOfImages[1]
// useQuerySelectorAll[2].src = listOfImages[2]

// for(let i = 0; i < useQuerySelectorAll.length; ++i){
//     useQuerySelectorAll[i].src = listOfImages[i]
// }

const allImagesSrc = [
    'front view of virtus',
    'head lamp of vitus',
    'rear view of vitus'
]

useQuerySelectorAll.forEach((altText,index) => {
    altText.alt = allImagesSrc[index]
})


for(let i =0; i < useQuerySelectorAll.length; ++i){  // used for loop to add the alt attributes
    useQuerySelectorAll[i].alt = allImagesSrc[i]
}

useQuerySelectorAll.forEach((exteriorImages,i) => {  // used forEach method to loop all the images together
    exteriorImages.src = listOfImages[i]
})


const useDefaultImages = Array.from(document.images)  // converting the document.images into array 

useDefaultImages.forEach((exteriorImages,i) => {  // used forEach method to loop all the images together
    exteriorImages.src = listOfImages[i]
})

console.log('Images are appearing from useDefaultImages ',useDefaultImages)
console.log('Alt attributes are appearing from allImagesSrc',allImagesSrc)

// adding querySelector on specific section of the document and used for loop to print the values on document

const unOrderedListChecking = document.querySelector('#find-li-in-ul')
console.log(unOrderedListChecking)

const unOrderedListEnd = document.querySelectorAll('#find-li-in-ul')
console.log(unOrderedListEnd)

const ulChanges = [
    `This is the first car I've seen in my life with a low budget and full luxury.`,
    `As per the Highway Code, you must use dipped headlights “when visibility is seriously reduced”`,
    `Which car has better mileage Slavia or Virtus [2022-2023]?`,
    `Your rear lights also include back up lights, which are white.`,
]

for(let i = 0; i < unOrderedListEnd.length; ++i){
    console.log(unOrderedListEnd[i].innerText = ulChanges[i])
}

// copy JS path is the easiest way to access elements

// document.body.children[3].children[1].href = 'https://www.godigit.com/motor-insurance/car-insurance' // normal method used 
console.log('Normal Method used:',"document.body.children[3].children[1].href = 'https://www.godigit.com/motor-insurance/car-insurance'")

const copyJsPathOnBrowser = document.querySelector("body > p:nth-child(4) > a:nth-child(2)").href = 'https://www.godigit.com/motor-insurance/car-insurance'
console.log('Check first hyperlinked text used copyJsPath method:','document.querySelector("body > p:nth-child(4) > a:nth-child(2)").href = "https://www.godigit.com/motor-insurance/car-insurance"')