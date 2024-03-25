const submitButton = document.querySelector("#submission");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "blog.html";
});

const username = document.querySelector('#un');
const title = document.querySelector('#t1');
const content = document.querySelector('#c1');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const blogdata = {
    Author: username.value,
    Title: title.value,
    Content: content.value,
  };

  localStorage.setItem('blogdata', JSON.stringify(blogdata));
  renderContent();
});