const controlButton = document.getElementById('control-icon')
const progressBar = document.getElementById('progress')
const audioFile = document.getElementById('song')
const playButton = document.getElementById('act-button')

// console.log(audioFile.onloadedmetadata)

audioFile.onloadedmetadata = function() {
  progressBar.max = audioFile.duration;
  progressBar.value = audioFile.currentTime;
}

function musicControls() {
if(controlButton.classList.contains('fa-play')){
  audioFile.play();
  controlButton.classList.remove('fa-play');
  controlButton.classList.add('fa-pause');

  setInterval(() => {
    progressBar.value = audioFile.currentTime;
  }, 500)
  
}
else {
  audioFile.pause();
  controlButton.classList.remove('fa-pause')
  controlButton.classList.add('fa-play');
}
}

progressBar.onchange = function(){
  audioFile.play();
  controlButton.classList.add('fa-pause');
  controlButton.classList.remove('fa-play');
  audioFile.currentTime = progressBar.value;
}

audioFile.addEventListener('ended', (e) => {  // when the playback end icons are going to replaced with the help of add event listener
  audioFile.pause();
  controlButton.classList.remove('fa-pause')
  controlButton.classList.add('fa-play');
})

playButton.addEventListener('click', (e) => {
  musicControls()
})

