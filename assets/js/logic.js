const blogEntries = JSON.parse(localStorage.getItem('blogData'));
function getBlogsFromLocalStorage() {
    document.getElementById('title1').textContent = blogEntries.Title;
    document.getElementById('content1').textContent = blogEntry.Content;
    document.getElementById('author1').textContent = `Author: ${blogEntry.Author}`;
}

getBlogsFromLocalStorage();
// console.log(blogEntry);
// const blog = getBlogsFromLocalStorage
// function getBlogsFromLocalStorage() {
//     JSON.parse(localStorage.getItem('blogData'));
// }
//fetch from local storage from array
//push to populate the local storage on page load with event listener
// blogData.getBlogsFromLocalStorage()

function saveBlogEntry(blogEntry){
    console.log('saveBlogEntry')
}