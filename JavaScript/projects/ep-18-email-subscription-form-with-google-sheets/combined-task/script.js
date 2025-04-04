const mainSection = document.querySelector(".main-section");
const subscribeButton = document.querySelector(".subscribe-button");
const modalSection = document.querySelector(".modal");
const closeModal = document.querySelector(".close-sec");
const nameError = document.querySelector(".name-element");
const phoneError = document.querySelector(".number-element");
const emailError = document.querySelector(".mail-element");
const toastBox = document.getElementById("toast-box");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzWHJrYhtWph9PMkm38geSN3-PfoyGA66HnqlZTycs_Tzp_otp8ZDvRa5fpSk7EvNZw/exec";
const form = document.forms["submit-to-google-sheet"];
const thanksModal = document.querySelector(".thanks-modal");
const closeThanksModal = document.querySelector(".new-close-circle");
const questionSection = document.querySelector(".question-section");
const answerSection = document.querySelector(".accordion-answer-section");
const switchButton = document.querySelector(".navigation-bar");
let switchDarkMode = localStorage.getItem('dark-theme');
// let switchBack = localStorage.getItem('light-mode');

subscribeButton.addEventListener("click", (e) => {
  subscribeButton.parentElement.classList.add("hide-text-content");
  modalSection.classList.add("open-modal");
});

closeModal.addEventListener("click", (e) => {
  subscribeButton.parentElement.classList.remove("hide-text-content");
  modalSection.classList.remove("open-modal");
});

function validateName() {
  let userName = document.getElementById("user-name").value;
  // tostNotificationBar.classList.remove('show-toast-bar');

  if (userName.length == "0") {
    nameError.innerText = "Name Required";
    return false;
  }
  if (!userName.match(/^[A-Za-z]*\s{1}[A-Za-z]/)) {
    nameError.innerText = "Enter Full Name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhoneNumber() {
  let userContactNumber = document.getElementById("phone-no").value;
  // tostNotificationBar.classList.remove('show-toast-bar');

  console.log(userContactNumber);
  if (userContactNumber.length == "0") {
    phoneError.textContent = "Phone number is required";
    return false;
  }
  if (!userContactNumber.match(/^[6-9]{1}[0-9]{9}$/)) {
    phoneError.textContent = "Enter valid number";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let userEmail = document.getElementById("user-email").value;
  // tostNotificationBar.classList.remove('show-toast-bar');

  console.log(userEmail);

  if (userEmail.length == "0") {
    emailError.textContent = "Email is required";
    return false;
  }
  if (!userEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.textContent = "Enter valid email";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function submitForm() {
  if (!validateName() || !validatePhoneNumber() || !validateEmail()) {
    let toast = document.createElement("div");
    toast.classList.add("toast-notification");
    toast.innerHTML = `<p>Please fix the above error</p>
            <i class="fa-solid fa-circle-xmark"></i>`;
    toastBox.appendChild(toast);

    let removeAll = document.querySelectorAll(".toast-notification");

    removeAll.forEach((each) => {
      setTimeout(() => {
        each.classList.add("move-tost");
      }, 3000);
      each.addEventListener("click", (e) => {
        each.classList.add("move-tost");
        console.log(each);
      });
    });
    return false;
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        // textMessage.textContent = 'Thank You for Subscribing!'
        console.log("Success!", response);
        // setTimeout(() => {
        //     textMessage.textContent = ""  // to make the field empty
        // }, 5000);
        form.reset();

        modalSection.classList.remove("open-modal");
        thanksModal.classList.add("appear-thanks-modal");

        let toast = document.createElement("div");
        toast.classList.add("toast-notification");
        toast.innerHTML = `<p>Thanks for Subscribing</p>
                <i class="fa-solid fa-circle-check" style="color: green;"></i>`;
        toastBox.appendChild(toast);

        let removeAll = document.querySelectorAll(".toast-notification");

        removeAll.forEach((each) => {
          setTimeout(() => {
            each.classList.add("move-tost");
          }, 3000);
          each.addEventListener("click", (e) => {
            each.classList.add("move-tost");
            console.log(each);
          });
        });
      })
      .catch((error) => console.error("Error!", error.message));
  });
}

closeThanksModal.addEventListener("click", (e) => {
//   thanksModal.classList.remove('appear-thanks-modal');
//   subscribeButton.parentElement.classList.remove('hide-text-content');
  location.reload();
// form.reset();
});

questionSection.addEventListener("click", (e) => {
  questionSection.classList.toggle("add-color");
  answerSection.classList.toggle("display-answer");
});

/*
switchFunction = () => {  // this is how we can add switch dark mode function but the issue is the changes won't stay the same after refresh the webpage
  document.body.classList.toggle("dark-mode-active");
  switchButton.children[0].classList.remove("fa-sun");
  switchButton.children[0].classList.add("fa-moon");
  switchButton.children[0].style.color = "unset";

  if (document.body.classList.contains("dark-mode-active")) {
    switchButton.children[0].classList.add("fa-sun");
    switchButton.children[0].style.color = "white";
    switchButton.children[0].classList.remove("fa-moon");
  }
};
*/

switchFunction = () => {
    switchDarkMode = localStorage.getItem('dark-theme');

    if(switchDarkMode !== 'active'){
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
}

if(switchDarkMode === 'active')enableDarkMode();

function enableDarkMode(){
    localStorage.setItem('dark-theme', "active");
    document.body.classList.add('dark-mode-active');
    switchButton.children[0].classList.add('fa-sun');
    switchButton.children[0].classList.remove('fa-moon');
    switchButton.children[0].style.color = "#fff"
}
function disableDarkMode(){
    localStorage.setItem('dark-theme', null);
    document.body.classList.remove('dark-mode-active');
    switchButton.children[0].classList.remove('fa-sun');
    switchButton.children[0].classList.add('fa-moon');
    switchButton.children[0].style.color = "#222"
}