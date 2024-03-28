const backButton = document.querySelector("#back");

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});

const toggleBtn = document.querySelector("#darkmode", "#lightmode");
const bodytag = document.querySelector('body');
let mode = 'light';
toggleBtn.addEventListener('click', function() {

  if (mode === 'light') {
    mode = 'dark';
    body.setattribute('id', 'dark');
  }
  else {
    mode = 'light';
    body.setAttribute('id', 'light');
  }
});
// const toggleLD = document.querySelector('#darkmode');
// console.log('#darkmode');
// if () {
  
// }