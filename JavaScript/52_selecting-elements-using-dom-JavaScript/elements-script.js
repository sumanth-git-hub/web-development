console.dir(document.body.children[0])

const allImages = document.getElementsByTagName('img')
console.dir(allImages)

// document.images // this method serves similar to above variable value and this the default method  

document.getElementsByTagName('h2')[0].innerHTML = ('<i>Manipulating the H2</i>')  // used getElementsByTagName

const frontEndBaseImage = document.getElementsByClassName('base-of-frontend')[1] // used document.getElementsByClassName
frontEndBaseImage.src = 'https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2305673-volkswagen-virtus-review-smartselect_20220508143648_instagram.jpg'

const secondImage = document.getElementById('second-image')

// secondImage.src = 'https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2305672-volkswagen-virtus-review-smartselect_20220508143656_instagram.jpg'

const thirdImage = document.getElementById('third-image')
console.dir(thirdImage)  // getting null as a return value because the 'third-image' id is not used anywhere on our document

const nextImage = document.querySelector('.last-image')
// nextImage.src = 'https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2305674-volkswagen-virtus-review-smartselect_20220508143635_instagram.jpg'

const selectAll = document.querySelectorAll('.one-image')[0]
// selectAll.src = 'https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2305673-volkswagen-virtus-review-smartselect_20220508143648_instagram.jpg'

const attributeSelector = document.querySelector('[alt="javascript contents image"]')   // used attribute selector of css to select the element

// const selectAll1 = document.querySelectorAll('.one-image')  // used querySelectorAll to change the images

const selectAll1 = Array.from(document.images) // converted document.images into array
// const selectAll1 = [...document.images] // converted document.images into array

const imagesList = [
    'https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2305672-volkswagen-virtus-review-smartselect_20220508143656_instagram.jpg',
    'https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2305673-volkswagen-virtus-review-smartselect_20220508143648_instagram.jpg',
    'https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2305674-volkswagen-virtus-review-smartselect_20220508143635_instagram.jpg'
]

// selectAll1[0].src = imagesList[0]  // manipulating each image by accessing with index numbers
// selectAll1[1].src = imagesList[1]  
// selectAll1[2].src = imagesList[2]

// for(let i = 0; i < selectAll1.length; ++i){  // instead of the above method we can use for loop
//     selectAll1[i].src = imagesList[i]
// }


// selectAll1.forEach((oneImage,i) => {  // used forEach method to loop images in querySelectorAll
//     console.log(oneImage)
//     oneImage.src = imagesList[i]
// })

console.log(selectAll1)
// selectAll1.forEach((oneImage,i,array) => {
//     console.log(i,oneImage,array)
//     oneImage.src = imagesList[i]
// })

selectAll1.map((mapUse,i) => { // used map  method to loop images in querySelectorAll
   return mapUse.src = imagesList[i]
})

const unOrderedList = document.querySelector('ul')
console.log(unOrderedList.querySelector('.check-unorder-list'))  // adding the querySelector on specific element
console.log(document.querySelector('.check-unorder-list')) // adding the querySelector on whole document level (querySelector always pick the first comer)


const crossCHeckUl = document.querySelectorAll('ul')[2]  // in the above similar selector i have targeted the entire ul over document but here i specifically targeted the last ul section with querySelectorAll

console.log(crossCHeckUl.querySelectorAll('.check-unorder-list'))


// easy way to copy the JS path of the tag 

const copyJsPath = document.querySelector("body > h2 > i").innerText = 'Manipulating the H2 Again'

console.log(copyJsPath)

