const scrollContainer = document.querySelector('.gallery');
const backButton = document.querySelector('.fa-square-caret-left');
const forwardButton = document.querySelector('.fa-square-caret-right');


scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY
    scrollContainer.style.scrollBehavior = "auto"
});
backButton.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += -1000;
})
forwardButton.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 1000;
})