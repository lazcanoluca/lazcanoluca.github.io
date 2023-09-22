// JavaScript for loading content into the main content area

import './components/post.js'

document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById("content");
    const post = document.createElement('post');

    contentContainer.appendChild(post);
})


// function loadPage(pageName) {
//     fetch(pageName)
//         .then(response => response.text())
//         .then(data => {
//             contentContainer.innerHTML = data;
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }

// function addPost() {
//     fetch("some-article.html")
//         .then(data => { contentContainer.innerHTML = data; })
//         .catch(console.log);
// }

// Initial load of the Home page
// loadPage("index.html");
// addPost();
