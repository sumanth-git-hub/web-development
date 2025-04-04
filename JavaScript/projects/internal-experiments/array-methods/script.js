const imageClasses = document.querySelectorAll(".change-img");
const newSetOfImages = document.querySelector(".new-set");


let setOfImages = [
    '/projects/internal-experiments/array-methods/img-gal/img-5.jpg',
    '/projects/internal-experiments/array-methods/img-gal/img-6.jpg',
    '/projects/internal-experiments/array-methods/img-gal/img-7.jpg',
    '/projects/internal-experiments/array-methods/img-gal/img-8.jpg',
]

let firstSetOfImages = [
    '/projects/internal-experiments/array-methods/img-gal/img-1.jpg',
    '/projects/internal-experiments/array-methods/img-gal/img-2.jpg',
    '/projects/internal-experiments/array-methods/img-gal/img-3.jpg',
    '/projects/internal-experiments/array-methods/img-gal/img-4.jpg',
]



newSetOfImages.addEventListener("click", (e) => {
    newSetOfImages.classList.toggle("active")
    if(newSetOfImages.classList.contains("active")){
        imageClasses.forEach((element, i) => {
            imageClasses[i].src = firstSetOfImages[i]
            newSetOfImages.innerText = "Changes Images"
        });
    }
    else {
        imageClasses.forEach((element, i) => {
            imageClasses[i].src = setOfImages[i];
            // newSetOfImages.innerText = "Show Images"
        });
    }
});


const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b96264afa79d40088508f090a2277cca';
// fetch(url)
//     .then(function(response) {
//         console.log(response.json());
//     })


fetch(url)
.then((res) => { res.json()})
.then((passNews)=> {
    console.log(passNews)
})