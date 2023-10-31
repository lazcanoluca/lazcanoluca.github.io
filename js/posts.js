/**
 * Un post.
 * @typedef {Object} PostMetadata
 * @property {string} titulo - Titulo.
 * @property {string} autor - Autor.
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
        throw new Error(err)
    }
}

/**
 * Parsea el HTML pasado y devuelve el post.
 * @param {string} src - The HTML content to parse.
 * @returns {PostMetadata} - The parsed post object.
 */
export async function getPostMetadata(src) {

    try {
        const files = await fetch(src);
        const text = await files.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const metadata = doc.getElementsByTagName('meta');

        const postMetadata = {
            titulo: metadata.namedItem('titulo').content,
            autor: metadata.namedItem('autor').content
        }

        console.log(postMetadata)

        return postMetadata;

    } catch (err) {
        throw new Error(err)
    }
}