import { loadPosts, parseHtmlToPost } from '../js/posts.js';
import { test, assertEqual } from '../lib/microtesting/index.js'

test('loadPosts', async () => {
    await assertEqual(
        await loadPosts('../tests/posts_test'),
        ['/tests/posts_test/another_post_example.html', '/tests/posts_test/post_example.html']
    )
});

