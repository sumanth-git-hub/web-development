const inputBox = document.getElementById('input-box');
const ctaButton = document.querySelector('.cta-button');
const listContainer = document.querySelector('.list-container');


ctaButton.addEventListener('click', () => {
    if(inputBox.value === ''){
        alert('Please enter the goals')
    }
    else {
        const listItem = document.createElement('li');
        listItem.innerText = inputBox.value
        listContainer.appendChild(listItem)
        const crossIcon = document.createElement('span');
        crossIcon.classList.add('cross-icon')
        crossIcon.innerHTML = '&#10006;'
        listItem.appendChild(crossIcon)
    }

    inputBox.value = ''
    saveData()
});


listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
       e.target.classList.toggle('checked');
       saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}


const displayData = ()=> {
    console.log(localStorage.getItem('data'))
    listContainer.innerHTML = localStorage.getItem('data')
}
displayData()