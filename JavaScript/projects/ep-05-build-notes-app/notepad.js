const notePadContentSection = document.querySelector(".note-pad");
const charactersCount = document.querySelector(".char-count");
const wordsCount = document.querySelector(".word-count");

function storeData() {
  localStorage.setItem("note", notePadContentSection.textContent);
  localStorage.setItem("char", charactersCount.innerHTML);
  localStorage.setItem("word", wordsCount.innerHTML);
}

function displayData() {
  notePadContentSection.textContent = localStorage.getItem("note");
  charactersCount.innerHTML = localStorage.getItem("char");
  wordsCount.innerHTML = localStorage.getItem("word");
}
displayData();

notePadContentSection.addEventListener("keyup", () => {
  charactersCount.innerText = notePadContentSection.textContent.replace(/\n/g, '').length;  //find characters Count
  const splitWords = notePadContentSection.textContent.replace(/\s+/g, " ").trim().split(" "); // find word count
  // console.log(splitWords)
  wordsCount.innerText = splitWords.length;
  if(splitWords[0] == ""){
    wordsCount.innerText = 0;
  }
  storeData();
});
