import { loadPosts, parseHtmlToPost } from '../js/posts.js';

describe('Posts', () => {
    it('works', async () => {
        await expectAsync(loadPosts()).toBeResolvedTo([])
    })
})

// console.log('Empezando tests...')

// test('loadPosts', () => {
//     return loadPosts('./posts_test')
//         .finally(posts => {
//             assertEqual(posts, ['hola']);
//         })
// });

// test('createPublicationYearLabel: a single year', () => {
//     assertEqual(1, 1);
// });

// console.log('Fin de los tests.')

