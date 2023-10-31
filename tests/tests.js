import { loadPosts, parseHtmlToPost } from '../js/posts.js';

import { test, assertEqual } from '../lib/microtesting/index.js'

// import { describe, it } from '../lib/jasmine/jasmine.js'

// describe('Posts', () => {
//     it('works', async () => {
//         await expectAsync(loadPosts()).toBeResolvedTo([])
//     })
// })

// console.log('Empezando tests...')

test('loadPosts', async () => {
    await assertEqual(
        await loadPosts('../tests/posts_test'),
        ['/tests/posts_test/another_post_example.html', '/tests/posts_test/post_example.html']
    )
});

// test('createPublicationYearLabel: a single year', () => {
//     assertEqual(1, 1);
// });

// console.log('Fin de los tests.')

