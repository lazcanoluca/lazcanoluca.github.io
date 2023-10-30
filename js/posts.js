export { loadPosts }

/**
 * Un post.
 * @typedef {Object} Post
 * @property {string} titulo - Titulo.
 * @property {string} subtitulo - Subtitulo.
 */

const POSTS_DIR = '../posts'

/**
 * Carga los posts desde /posts.
 * @returns {Post[]}
 */
async function loadPosts() {

    let files

    try {
        files = await fetch(POSTS_DIR)
    } catch {
        console.log('Error.')
        return new Error('No se pudo fetchear el directorio.')
    }

    if (files.ok) {
        const text = await files.text()
        const fileNames = text
            .split("\"")
            .filter(str =>
                str.trim().endsWith('.html') &&
                str.trim().startsWith('\/')
            );
        console.log(fileNames)
    }

    // for (const file of files) {
    //     console.log(file)
    // }

}