const qrInput = document.getElementById('qr-text');
const qrGenerateButton = document.querySelector('.generate-qr-button');
const qrCodeImage = document.getElementById('qr-code-image');
const qrImageBox = document.getElementById('qr-image-box');

function generateQrCode() {
    if(qrInput.value.length > 0){
        qrCodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value
        qrImageBox.classList.add('show-img')
    }
   else {
    qrInput.classList.add('error')
    setTimeout(() => {
        alert('Please add the Text or URL')
        qrInput.classList.remove('error')
         
    }, 1000);
   }
}

qrGenerateButton.addEventListener('click', () => {
    generateQrCode()
})