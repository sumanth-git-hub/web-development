const formSubmit = document.querySelector('.form')
const inputField = document.querySelector('.input')
const localFormat = document.querySelector('.local-format span')
const utcZone = document.querySelector('.utc span')
const isoZone = document.querySelector('.iso span')

formSubmit.addEventListener('submit', function(e) {
    e.preventDefault()

    const timeSTamp = Number(inputField.value)
    const convertTimeStamp = new Date(timeSTamp)
    console.log(convertTimeStamp)
    console.log(convertTimeStamp.toLocaleString('en-GB', { dateStyle: 'full'}))
    localFormat.textContent = convertTimeStamp.toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long'},)
    utcZone.textContent = convertTimeStamp.toUTCString()
    isoZone.textContent = convertTimeStamp.toISOString()
})