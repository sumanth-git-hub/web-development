const ctaButtons = document.querySelectorAll(".buttons button");
const toastBox = document.getElementById("toast-box");
let successMsg =
  '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid, please check again';

function callButtons(textMsg) {
  let toast = document.createElement("div");
  toast.classList.add("toast-element");
  toast.innerHTML = textMsg;
  toastBox.appendChild(toast);

  if (textMsg.includes("error")) {
    toast.classList.add("error");
    // let errorIcon = document.querySelector('.error')   // added event listener to remove the parent when the user click on the element
    // console.log(errorIcon.firstChild)
    // errorIcon.firstChild.addEventListener('click', (e) => {
    //     errorIcon.parentElement.remove()
    //     window.location.reload()
    // })
  }
  if (textMsg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
  console.log(toast)
}
