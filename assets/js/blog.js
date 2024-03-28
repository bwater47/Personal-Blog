const backButton = document.querySelector("#back");

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});

const toggleBtn = document.querySelectorAll("#lightmode");
const body = document.querySelector('body');
let mode = 'dark';

toggleBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    if (mode === 'dark') {
      mode = 'light';
      body.setAttribute('id', 'light');
    } else {
      mode = 'dark';
      body.setAttribute('id', 'dark');
    }
  });
});
// const toggleLD = document.querySelector('#darkmode');
// console.log('#darkmode');
// if () {
  
// }