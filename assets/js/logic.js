const submitButton = document.querySelector('#pageSwitcher');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'blog.html'
  });