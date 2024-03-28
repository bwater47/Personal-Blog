let blogEntries = JSON.parse(localStorage.getItem('blogData'));
function getBlogsFromLocalStorage() {

    document.getElementById('title-1').textContent = blogEntries[0].Title;
    document.getElementById('content-1').textContent = blogEntries[0].Content;
    document.getElementById('author-1').textContent = `Author: ${blogEntries[0].Author}`;

    document.getElementById('title-2').textContent = blogEntries[1].Title;
    document.getElementById('content-2').textContent = blogEntries[1].Content;
    document.getElementById('author-2').textContent = `Author: ${blogEntries[1].Author}`;

    document.getElementById('title-3').textContent = blogEntries[2].Title;
    document.getElementById('content-3').textContent = blogEntries[2].Content;
    document.getElementById('author-3').textContent = `Author: ${blogEntries[2].Author}`;

    document.getElementById('title-4').textContent = blogEntries[3].Title;
    document.getElementById('content-4').textContent = blogEntries[3].Content;
    document.getElementById('author-4').textContent = `Author: ${blogEntries[3].Author}`;

    // for (let i = 0; i < 4; i++) {
    //     // const elements = blogEntries[i];
    //     let titleEl=`title-${[i]}`;
    //     // console.log(titleEl);
    //     document.getElementById(`title-${[i+1]}`).textContent = blogEntries[i].Title;
    //     document.getElementById(`content-${[i+1]}`).textContent = blogEntries[i].Content;
    //     document.getElementById(`author-${[i+1]}`).textContent = blogEntries[i].Author;
    // }

}

for (let i = 0; i < 4; i++) {
    // const elements = blogEntries[i];
    const entry = blogEntries[i];
    // console.log(titleEl);
    document.getElementById(`title-${[i+1]}`).textContent = entry.Title;
    document.getElementById(`content-${[i+1]}`).textContent = entry.Content;
    document.getElementById(`author-${[i+1]}`).textContent = entry.Author;
}
// template literal string
//
// getBlogsFromLocalStorage();
// console.log(blogEntry);
// const blog = getBlogsFromLocalStorage
// function getBlogsFromLocalStorage() {
//     JSON.parse(localStorage.getItem('blogData'));
// }
//fetch from local storage from array
//push to populate the local storage on page load with event listener
// blogData.getBlogsFromLocalStorage()