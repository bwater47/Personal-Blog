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
  // console.log(username.value, title.value, content.value, "data");
  if (username.value && title.value && content.value) {
    const blogData = {
      Author: username.value.trim(),
      Title: title.value.trim(),
      Content: content.value.trim(),
    };
    localStorage.setItem("blogData", JSON.stringify(blogData));
    renderContent();
  } else {
    alert("Please enter all fields");
  }
});
function renderContent() {
  window.location.href = "blog.html";
}
