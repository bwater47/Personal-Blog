// This let statement creates a variable that stores the blog data from local storage
let blogEntries = JSON.parse(localStorage.getItem('blogData'));
// This function gets the blog data from local storage
function getBlogsFromLocalStorage() {
// This method displays the blog data on the page
    document.getElementById('title-1').textContent = blogEntries[0].Title;
    document.getElementById('content-1').textContent = blogEntries[0].Content;
    document.getElementById('author-1').textContent = `Author: ${blogEntries[0].Author}`;
// This method displays the blog data on the page
    document.getElementById('title-2').textContent = blogEntries[1].Title;
    document.getElementById('content-2').textContent = blogEntries[1].Content;
    document.getElementById('author-2').textContent = `Author: ${blogEntries[1].Author}`;
// This method displays the blog data on the page
    document.getElementById('title-3').textContent = blogEntries[2].Title;
    document.getElementById('content-3').textContent = blogEntries[2].Content;
    document.getElementById('author-3').textContent = `Author: ${blogEntries[2].Author}`;
// This method displays the blog data on the page
    document.getElementById('title-4').textContent = blogEntries[3].Title;
    document.getElementById('content-4').textContent = blogEntries[3].Content;
    document.getElementById('author-4').textContent = `Author: ${blogEntries[3].Author}`;
}
// This for loop iterates through the blog data and displays it on the page
for (let i = 0; i < 4; i++) {
   // This variable stores the current blog entry
    const entry = blogEntries[i];
 // This method displays the blog data on the page when the page loads
    document.getElementById(`title-${[i+1]}`).textContent = entry.Title;
    document.getElementById(`content-${[i+1]}`).textContent = entry.Content;
    document.getElementById(`author-${[i+1]}`).textContent = entry.Author;
}