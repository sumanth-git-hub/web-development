const addSectionButton = document.querySelector('.add-notes-button');
let notesContainer = document.querySelector('.notes-container');


function setLocalStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML)
}
function displayData() {
    notesContainer.innerHTML = localStorage.getItem('notes')
}
displayData()

addSectionButton.addEventListener('click', () => {
    let contentArea = document.createElement('div');
    contentArea.innerHTML = `<p contenteditable="plaintext-only" class="input-box"><img src="images/trash-solid.svg" id="trash-icon"></p>`
    notesContainer.appendChild(contentArea)
});
notesContainer.addEventListener('click', (e) => {

    
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        setLocalStorage()
    }
    else if(e.target.tagName === "P"){

       let  notesBox = document.querySelectorAll('.input-box');
        let newSection = document.createElement('span')
        newSection.classList.add('word-count')
        notesBox[0].append(newSection)
        console.log(notesBox[0])
        let countSection =document.createElement('char-count');
        countSection.classList.add('char-count');
        notesBox[0].append(countSection)
        // notesBox.append(newSection)
        notesBox.forEach(shortNotes => {
            shortNotes.onkeyup = function(){
                newSection.innerHTML = 'Characters: ' + notesBox[0].textContent.length
                countSection.innerText = 'Words: ' + notesBox[0].textContent.split(' ').length
                setLocalStorage()
            }
        });
        
        // newSection.innerText = notesBox.textContent.length
       
    }
});


document.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        document.execCommand('insertLineBreak')
        e.preventDefault()
    }
})
