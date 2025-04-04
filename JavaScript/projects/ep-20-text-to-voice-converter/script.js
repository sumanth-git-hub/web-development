
const notePadContentSection = document.querySelector('.note-pad');
const charactersCount = document.querySelector('.char-count');
const wordCount = document.querySelector('.word-count');
const voiceButton = document.querySelector('.voice-button');

let listenVoice = new SpeechSynthesisUtterance();
let listOfVoices = [];
let selectVoices = document.querySelector('select');


// all about character and word count
notePadContentSection.addEventListener('input', () => {
    charactersCount.innerText = notePadContentSection.value.replace(/\n/g, '').length;

    const splitWords = notePadContentSection.value.replace(/\s+/g, " ").trim().split(" ");

    wordCount.innerText = splitWords.length;

    if(splitWords[0] === ""){
        wordCount.innerText = 0;
    }
    storeData();
})

// all about storing the data on local storage
const storeData = ()=> {
    localStorage.setItem('notePadBody', notePadContentSection.value)
    localStorage.setItem('charCount', charactersCount.innerText);
    localStorage.setItem('countWords', wordCount.innerText);
}

// fetching the data from local storage
function fetchData() {
    charactersCount.innerText = localStorage.getItem('charCount');
    wordCount.innerText = localStorage.getItem('countWords');
    notePadContentSection.value = localStorage.getItem('notePadBody');
}
fetchData();

// to turn the text value into speech
voiceButton.addEventListener('click', (e) => {
    if(voiceButton.children[0].classList.contains('fa-play')){
        listenVoice.text = notePadContentSection.value;
        window.speechSynthesis.speak(listenVoice);
        window.speechSynthesis.resume();
        voiceButton.children[0].classList.add('fa-stop');
        voiceButton.children[0].classList.remove('fa-play');
        voiceButton.children[1].innerText = " Stop"
    }
    else {
        voiceButton.children[0].classList.remove('fa-stop');
        voiceButton.children[0].classList.add('fa-play');
        voiceButton.children[1].innerText = " Listen"
        window.speechSynthesis.pause();
    }
    
})

listenVoice.addEventListener('end', () => {
    voiceButton.children[0].classList.remove('fa-stop');
    voiceButton.children[0].classList.add('fa-play');
    voiceButton.children[1].innerText = " Listen";
});

//list of voices available

window.speechSynthesis.onvoiceschanged = () => {
    listOfVoices = window.speechSynthesis.getVoices();
    listenVoice.voice = listOfVoices[0];

    listOfVoices.forEach((voice, i) => (selectVoices.options[i] = new Option(voice.name, i)));
}

selectVoices.addEventListener('change', () => {
    listenVoice.voice = listOfVoices[selectVoices.value];
});
