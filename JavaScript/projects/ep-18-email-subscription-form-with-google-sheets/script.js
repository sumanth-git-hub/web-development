const scriptURL = 'https://script.google.com/macros/s/AKfycbzWHJrYhtWph9PMkm38geSN3-PfoyGA66HnqlZTycs_Tzp_otp8ZDvRa5fpSk7EvNZw/exec'
  const form = document.forms['submit-to-google-sheet'];
  const textMessage = document.getElementById('text-message')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        textMessage.textContent = 'Thank You for Subscribing!'
        console.log('Success!', response) 
        setTimeout(() => {
            textMessage.textContent = ""  // to make the field empty
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })