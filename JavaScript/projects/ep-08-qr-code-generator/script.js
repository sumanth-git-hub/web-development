let imgBox = document.querySelector('.img-box')
let imgSource = document.getElementById('qr-image')
let qrInput = document.getElementById('qr-text')
const generateQRButton = document.querySelector('.generate-qr-button')

function generateQR() {

    if(qrInput.value.length > 0){
        imgSource.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;
    imgBox.classList.add('show-img');
    }
    else {
        qrInput.classList.add('error')
        setTimeout(() => {
            alert('Please Add the Text or URL')
            qrInput.classList.remove('error')
        }, 1000);
    }

}

generateQRButton.addEventListener('click', () => {
    generateQR()
})