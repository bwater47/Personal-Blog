const submitButton = document.querySelector("#submission");

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   window.location.href = "blog.html";
// });

const username = document.querySelector("#un");
const title = document.querySelector("#t1");
const content = document.querySelector("#c1");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(username.value, title.value, content.value, "data");
  if (username.value && title.value && content.value) {
    const blogdata = {
      Author: username.value,
      Title: title.value,
      Content: content.value,
    };
    localStorage.setItem("blogdata", JSON.stringify(blogdata));
    renderContent();
  } else {
    alert("Please enter all fields");
  }
});
function renderContent() {
  window.location.href = "blog.html";
}
