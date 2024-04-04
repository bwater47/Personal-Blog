// Purpose: To handle the form submission and store the data in local storage
const submitButton = document.querySelector("#submission");

// This variable stores the form input fields
const username = document.querySelector("#un");

const title = document.querySelector("#t1");

const content = document.querySelector("#c1");

const getData = localStorage.getItem('blogData');
// This if statement checks if there is data in the local storage, and if there is, it parses the data
let blogEntries = []
if (getData) {
 blogEntries = JSON.parse(getData)
}
// This is the form submission event listener
submitButton.addEventListener("click", function (event) {
  // This prevents the default form submission behavior
  event.preventDefault();

// This if statement checks if the form input fields are not empty
  if (username.value && title.value && content.value) {
    const blogData = {
      Author: username.value.trim(),
      Title: title.value.trim(),
      Content: content.value.trim(),
    };
// This pushes the form data to the blogEntries array
    blogEntries.push(blogData)
    localStorage.setItem("blogData", JSON.stringify(blogEntries));
    renderContent();
  } else {
    alert("Please enter all fields");
  }
});

function renderContent() {
  window.location.href = "blog.html";
}
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