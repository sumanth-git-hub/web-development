const selectField = document.querySelector(".select-field");
const selectText = document.querySelector(".select-text");
const carBrandsOptions = document.querySelectorAll('.car-brands');
const displayList = document.getElementById("list-of-brands")

carBrandsOptions.forEach((chooseBrand) => {
    chooseBrand.addEventListener('click', () => {
        selectText.textContent = chooseBrand.children[1].textContent;
        displayList.classList.add("hide-list");
        selectField.children[1].classList.remove("rotate-icon")
        selectField.classList.remove("fix-borders")
        console.log(chooseBrand.children[1].textContent)
    })
});

selectField.addEventListener("click", (e) => {
    displayList.classList.toggle("hide-list");
    selectField.children[1].classList.toggle("rotate-icon")
    selectField.classList.toggle("fix-borders");
    displayList.style.borderTopLeftRadius = "unset";
    displayList.style.borderTopRightRadius = "unset";
    console.log()
})