const productImage = document.getElementById('product-image');
const findArray = document.querySelectorAll(".btn");

/*
// recommended method on tutorial

findArray[0].onclick = function(){ 
    productImage.src = "product-images/front-view.jpg";
    findArray.forEach((element, i) => {
        findArray[i].classList.remove("active");
    })
    this.classList.add("active")
}
findArray[1].onclick = function(){ 
    productImage.src = "product-images/side-view.jpg";
    findArray.forEach((element, i) => {
        findArray[i].classList.remove("active");
    })
    this.classList.add("active")
}
findArray[2].onclick = function(){ 
    productImage.src = "product-images/rear-view.jpg";
    findArray.forEach((element, i) => {
        findArray[i].classList.remove("active");
    })
    this.classList.add("active")
};

*/


// i have written this based on my understanding

let setOfImages = [
    '/projects/ep-26-product-page-design-for-website/product-images/front-view.jpg',
    '/projects/ep-26-product-page-design-for-website/product-images/side-view.jpg',
    '/projects/ep-26-product-page-design-for-website/product-images/rear-view.jpg'
]

findArray.forEach((element, i) => {
    element.addEventListener("click", (e) => {
        productImage.src = setOfImages[i];

        if(findArray[i].classList.contains("active")){
            findArray[i].classList.remove("active");
            
        }
        else {
            findArray[i].classList.add("active")
        }
        
    })
})
