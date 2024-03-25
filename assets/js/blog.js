const backButton = document.querySelector("#back");

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});