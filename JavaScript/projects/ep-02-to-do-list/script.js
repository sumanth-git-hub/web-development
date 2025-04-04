'use strict'

const inputBox = document.getElementById('input-box');
const listContainer = document.querySelector('.list-container');
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', () => {
    if(inputBox.value == ''){
        alert('Please enter the task')
    }
    else {
        let listItem = document.createElement('li');
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem);
        const crossIcon = document.createElement('span');
        crossIcon.classList.add('cross-icon')
        crossIcon.innerHTML = '&#x2715;';
        listItem.appendChild(crossIcon)
    }

    inputBox.value = '';
    saveData()
})

listContainer.addEventListener('click', (e) => {
    // console.log(e.target.tagName)
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

const displayData = () => {
    listContainer.innerHTML = localStorage.getItem('data')
}
displayData()