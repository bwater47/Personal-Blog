// This is the back button selector
const backButton = document.querySelector("#back");
// This is the event listener for the back button
backButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});
// This is the light/dark mode toggle button selector
const toggleBtn = document.querySelectorAll("#lightmode");
const body = document.querySelector('body');
// This variable stores the current mode of the page
let mode = 'dark';
// This is the event listener for the light/dark mode toggle button
toggleBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    // This if statement checks the current mode of the page and toggles it
    if (mode === 'dark') {
      mode = 'light';
      body.setAttribute('id', 'light');
    } else {
      mode = 'dark';
      body.setAttribute('id', 'dark');
    }
  });
});
