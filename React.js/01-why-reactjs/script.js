const totalAppleCounts = 10;

const firstBasket = document.querySelector(".first-basket span");
const secondBasket = document.querySelector(".second-basket span");

let secondBasketAppleCounts = 0;
let firstBasketAppleCounts = totalAppleCounts - secondBasketAppleCounts;

firstBasket.innerText = firstBasketAppleCounts;
secondBasket.innerText = secondBasketAppleCounts;


document.querySelector(".right-arrow").addEventListener("click", (e) => {
    if(firstBasketAppleCounts > 0){
        console.log("Right Arrow!!");
        firstBasketAppleCounts--;
        firstBasket.innerText = firstBasketAppleCounts;
        secondBasketAppleCounts++;
        secondBasket.innerText = secondBasketAppleCounts;
    }
})
document.querySelector(".left-arrow").addEventListener("click", (e) => {
    if(secondBasketAppleCounts > 0){
        console.log("Left Arrow!!");
        firstBasketAppleCounts++;
        firstBasket.innerText = firstBasketAppleCounts;
        secondBasketAppleCounts--;
        secondBasket.innerText = secondBasketAppleCounts;
    }
})
