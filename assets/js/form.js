const submitButton = document.querySelector("#submission");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "blog.html";
});