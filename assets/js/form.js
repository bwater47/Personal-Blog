const submitButton = document.querySelector("#submission");

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   window.location.href = "blog.html";
// });

const username = document.querySelector("#un");
const title = document.querySelector("#t1");
const content = document.querySelector("#c1");
const getData = localStorage.getItem('blogData');
let blogEntries = []
if (getData) {
 blogEntries = JSON.parse(getData)
}
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // console.log(username.value, title.value, content.value, "data");
  if (username.value && title.value && content.value) {
    const blogData = {
      Author: username.value.trim(),
      Title: title.value.trim(),
      Content: content.value.trim(),
    };
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