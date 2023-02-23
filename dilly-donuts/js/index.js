const navigationIcon = document.querySelector(".ti-menu-2");
const toggleNavigationMenu = document.querySelector(".navigation-list");
const submitButton = document.querySelector("#submit-button");
const validateRadio = document.querySelector(".radio-input");


navigationIcon.addEventListener("click", (e) => {
  e.preventDefault();
  toggleNavigationMenu.classList.contains("toggle")
    ? toggleNavigationMenu.classList.remove("toggle")
    : toggleNavigationMenu.classList.add("toggle");
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name");
  const birthday = document.querySelector("#birthday");
  const gender = document.querySelector('input[name="gender"]:checked');
  const messages = document.querySelector("#messages");
  const validateErrorMessages = document.querySelector("#validate-messages");

  let validateName = false;
  let validateBirthday = false;
  let validateGender = false;
  let validateMessages = false;

  if (name.value === "") {
    name.style.border = "4px solid #EB455F";
    name.setAttribute("placeholder", "please tell me your name");
    validateName = false;
  } else {
    name.style.border = "none";
    name.setAttribute("placeholder", "input your name");
    validateName = true;
  }

  if (birthday.value === "") {
    birthday.style.border = "4px solid #EB455F";
    validateBirthday = false;
  } else {
    birthday.style.border = "none";
    validateBirthday = true;
  }

  if (gender === null) {
    validateRadio.style.color = "#EB455F";
    validateGender = false;
  } else {
    validateRadio.style.color = "var(--light)";
    validateGender = true;
  }

  if (messages.value === "") {
    messages.style.border = "4px solid #EB455F";
    messages.setAttribute("placeholder", "please leave a messages");
    validateMessages = false;
  } else {
    messages.style.border = "none";
    messages.setAttribute("placeholder", "tell me somehting");
    validateMessages = true;
  }

  if (
    validateName === false ||
    validateBirthday === false ||
    validateGender === false ||
    validateMessages === false
  ) {
    validateErrorMessages.innerText = "your input still empty";
  } else {
    output.innerHTML = `
      <div>
        <p><span>name</span> : ${name.value}</p>
        <p><span>birthday</span> : ${birthday.value}</p>
        <p><span>gender </span>: ${gender.value}</p>
        <p><span>messages </span>: ${messages.value}</p>
      </div>
    `;

    name.value = "";
    birthday.value = "";
    gender.checked = null;
    messages.value = "";
    validateErrorMessages.innerText = "";
  }
});


