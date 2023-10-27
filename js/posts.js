export { loadPosts }
// const fs = require('fs')
// const path = require('path')

/**
 * Un post.
 * @typedef {Object} Post
 * @property {string} titulo - Titulo.
 * @property {string} subtitulo - Subtitulo.
 */

const POSTS_DIR = 'posts'

/**
 * Carga los posts desde /posts.
 * @returns {Post[]}
 */
function loadPosts() {
    console.log('algo')
    // const files = fs.readdirSync(POSTS_DIR);

    // for (const file of files) {
    //     console.log(file)
    // }
}