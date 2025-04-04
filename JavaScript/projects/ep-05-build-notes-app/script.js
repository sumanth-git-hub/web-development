const notesContainer = document.querySelector('.notes-container');
const createButton = document.querySelector('.add-notes-button');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes() 

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML)
}

createButton.addEventListener('click', (e) => {
    let inputBox = document.createElement('p');
    /*
    inputBox.innerHTML = `
        <p contenteditable="true" class="input-box">
                <div class="attach-icon">
                <i class="fa-solid fa-trash" id="delete-icon"></i>
                </div>
            </p>
    `
                notesContainer.appendChild(inputBox)    
        */
       
    let deleteIcon = document.createElement('img');
    inputBox.classList.add('input-box');
    inputBox.setAttribute('contenteditable', 'true');
    deleteIcon.src = 'images/delete.png'
    notesContainer.appendChild(inputBox).appendChild(deleteIcon)
    // updateStorage()
})

notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        pureNotes = document.querySelectorAll('.input-box');
        pureNotes.forEach(shortNote => {
            shortNote.onkeyup = function() {
                updateStorage();
            }
        });
    }
})
document.addEventListener('keydown', (e) => {
    if(e.key  === "Enter"){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }  
})
