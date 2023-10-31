/**
 * Un post.
 * @typedef {Object} Post
 * @property {string} titulo - Titulo.
 * @property {string} subtitulo - Subtitulo.
 */


const POSTS_DIR = '../posts'

/**
 * Devuelve las rutas de los posts en /posts.
 * @returns {string[]}
 */
export async function loadPosts(src = POSTS_DIR) {

    try {
        const files = await fetch(src)
        const text = await files.text()
        const posts = text
            .split("\"")
            .filter(str =>
                str.trim().endsWith('.html') &&
                str.trim().startsWith('\/')
            );
        console.log(posts)
        return posts
    } catch (err) {
        throw new Error('No se pudo fetchear el directorio.')
    }
}

/**
 * Parsea el HTML pasado y devuelve el post.
 * @param {string} src - The HTML content to parse.
 * @returns {Post} - The parsed post object.
 */
export async function parseHtmlToPost(src) {
    fetch(src)
        .then(res => res.text())
        .then(data => {
            const metadata = data.getElementsByTagName('meta');
            const autor = metadata.namedItem('autor').content;
            const titulo = metadata.namedItem('titulo').content;
        })
        .catch(e => {
            return new Error('No se pudo cargar e')
        })
}