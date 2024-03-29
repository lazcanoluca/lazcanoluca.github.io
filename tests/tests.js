import { loadPostsRoutes, getPostMetadata, getPostsList } from '../js/posts.js';
import { test, assertEqual, assertEqualArrays, assertEqualObjects } from '../lib/microtesting/index.js'

test('loadPosts: debería obtener las rutas de los posts en la carpeta data',
    async () => {
        await assertEqual(
            await loadPostsRoutes('../tests/posts_test'),
            [
                '/tests/posts_test/another_post_example.html',
                '/tests/posts_test/post_example.html'
            ]
        )
    }
);

test('getPostMetadata: debería devolver la metadata dada la ruta a un post válido',
    async () => {
        await assertEqualObjects(
            await getPostMetadata('/tests/posts_test/post_example.html'),
            {
                autor: 'Luca',
                titulo: 'Prueba'
            }
        )
    }
);


test('getPostsList: debería devolver una lista de objetos con la metadata de los posts',
    async () => {
        await assertEqualObjects(
            await getPostsList('../tests/posts_test'),
            []
        )
    }
);