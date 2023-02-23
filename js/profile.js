const visitor = document.querySelector(".visitor");
const visitorButton = document.querySelector("#visitor-button");

// visitor pop up
visitorButton.addEventListener("click", (e) => {
  e.preventDefault();
  const visitorNameInput = document.querySelector("#visitor-name-input");
  const visitorName = document.querySelector(".visitor-name");

  visitorName.innerText = visitorNameInput.value;
  visitor.style.display = "none";
});
