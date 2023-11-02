// import { getPostMetadata } from "./js/posts"

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

async function loadPost(postHash) {
    const postRoute = `./posts/${postHash}`

    try {
        const metadata = await getPostMetadata(postRoute)
        const layout = await fetch(postRoute).text()
        document.getElementById('content-placeholder').innerHTML = layout;
        document.getElementById('post-title').innerHTML = metadata.titulo;
        document.getElementById('post-author').innerHTML = metadata.autor;
    } catch (err) {
        throw new Error(err)
    }
}

async function loadPage() {
    const hash = window.location.hash.substr(1); // Get the hash part without the #
    let contentFile = 'pages/home.html'; // Default content
    const postHash = hash.startsWith('post/') ? hash.split('/')[1] : null
    console.log('post hash: ', postHash)

    // Cada página se llama como su ruta. Corta.
    contentFile = hash ? `pages/${hash}.html` : 'pages/home.html'

    if (postHash) {
        try {
            await loadPost(postHash)
        } catch {
            document.getElementById('content-placeholder').innerHTML = `<p>Error al cargar el post.</p>`;
        }
    } else {
        fetch(contentFile)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content-placeholder').innerHTML = data;
                setSelectedNavItem(`${hash || 'home'}`)
            })
    }

    // .catch(
    //     document.getElementById('content-placeholder').innerHTML = `<h2>Oops...</h2>`
    // )

    console.log(hash)
}

window.addEventListener('hashchange', loadPage);

// Initial page load
await loadPage();