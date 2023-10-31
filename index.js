// import { loadPosts } from "./js/posts.js";

function loadPage() {
    const hash = window.location.hash.substr(1); // Get the hash part without the #
    let contentFile = 'pages/home.html'; // Default content

    // Cada página se llama como su ruta. Corta.
    contentFile = hash ? `pages/${hash}.html` : 'pages/home.html'

    if (hash === 'about') {
        contentFile = 'pages/about.html';
    } else if (hash === 'posts') {
        contentFile = 'pages/posts.html'
        // loadPosts()
    } else if (hash === 'a_post') {
        let postLayoutFile = 'pages/post.html'

        fetch(postLayoutFile)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            });

        fetch('posts/post_example.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('post-content').innerHTML = data;
            })
            .then(() => {
                let meta = document.getElementsByTagName('meta');
                let autor = meta.namedItem('autor').content;
                document.getElementById('author').innerHTML = `<p>${autor}</p>`;
            })
    }

    fetch(contentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-placeholder').innerHTML = data;
        });

    console.log(hash)
}

window.addEventListener('hashchange', loadPage);

// Initial page load
loadPage();