const blogData = (0)
// const blog = getBlogsFromLocalStorage
function getBlogsFromLocalStorage() {
    JSON.parse(localStorage.getItem('blogData'));
}
console.log(blogData)
//fetch from local storage from array
//push to populate the local storage on page load with event listener
// blogData.getBlogsFromLocalStorage()