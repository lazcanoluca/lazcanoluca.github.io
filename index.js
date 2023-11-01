// import { loadPosts } from "./js/posts.js";

/**
 * 
 * @param {string} hash - Saca el estilo "selected" a todos los nav items,
 * y le pone "selected" al que se pasa por hash.
 */
function setSelectedNavItem(hash) {
    document.getElementById('home')?.classList.remove('selected')
    document.getElementById('portfolio')?.classList.remove('selected')
    document.getElementById('posts')?.classList.remove('selected')
    document.getElementById('about')?.classList.remove('selected')
    document.getElementById('resume')?.classList.remove('selected')

    document.getElementById(hash)?.classList.add('selected')
}

function loadPage() {
    const hash = window.location.hash.substr(1); // Get the hash part without the #
    let contentFile = 'pages/home.html'; // Default content
    const postHash = hash.startsWith('post/') ? hash.split('/')[1] : null
    console.log('post hash: ', postHash)

    // Cada página se llama como su ruta. Corta.
    contentFile = hash ? `pages/${hash}.html` : 'pages/home.html'

    // if (hash === 'about') {
    //     contentFile = 'pages/about.html';
    // } else if (hash === 'posts') {
    //     contentFile = 'pages/posts.html'
    //     // loadPosts()
    // } else if (hash === 'a_post') {
    //     let postLayoutFile = 'pages/post.html'

    //     fetch('./layouts.post')
    //         .then(response => response.text())
    //         .then(data => {
    //             document.getElementById('content').innerHTML = data;
    //         });

    //     fetch('posts/post_example.html')
    //         .then(response => response.text())
    //         .then(data => {
    //             document.getElementById('post-content').innerHTML = data;
    //         })
    //         .then(() => {
    //             let meta = document.getElementsByTagName('meta');
    //             let autor = meta.namedItem('autor').content;
    //             document.getElementById('author').innerHTML = `<p>${autor}</p>`;
    //         })
    // }

    // if (postHash) {
    //     try {
    //         const layout = await fetch(`./posts/${postHash}`).text()   
    //     }
    // }

    fetch(contentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-placeholder').innerHTML = data;
            setSelectedNavItem(`${hash || 'home'}`)
        })
        .catch(
            document.getElementById('content-placeholder').innerHTML = `<h2>Oops...</h2>`
        )

    console.log(hash)
}

window.addEventListener('hashchange', loadPage);

// Initial page load
loadPage();