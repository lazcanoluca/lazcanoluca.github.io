import { getPostMetadata } from '../js/posts.js'

/**
 * @typedef {Object} Route
 * @property {RegExp} regex - The route. Can include dynamic segments, denoted as "/:route".
 * @property {Function} handler - Route handler. Will be fed an object with the dynamic segments, if any.
 */

// TODO: layout, query params, path to source file.

// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// };


class Router {
    /**
     * 
     * @param {Route[]} routes - App routes.
     */
    constructor(routes) {
        this.routes = routes;
        this.handle = this.handle.bind(this);
        window.addEventListener('hashchange', this.handle);
    }

    /**
     * 
     * @param {string} hash 
     */
    match(hash) {
        const match = this.routes.find(route => hash.match(route.regex))
        match && match.handler(hash)
    }

    handle() {
        const hash = window.location.hash;
        this.match(hash);
    }

    // parse(url) {

    // }

}

// const routes = {
//     404: "/pages/404.html",
//     "#home": "/pages/home.html",
//     "#portfolio": "/pages/portfolio.html",
//     "#about": "/pages/about.html",
//     "#posts": "/pages/building.html",
//     "#resume": "/pages/building.html"
// };

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

const router = new Router([
    {
        regex: /#home$/,
        handler: () => {
            console.log('Home')
            fetch('../pages/home.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content-placeholder').innerHTML = data;
                    setSelectedNavItem('home')
                })
        }
    },
    {
        regex: /#portfolio$/,
        handler: () => {
            console.log('Portfolio')
            fetch('../pages/portfolio.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content-placeholder').innerHTML = data;
                    setSelectedNavItem('portfolio')
                })
        }
    },
    {
        regex: /#posts$/,
        handler: () => {
            console.log('Posts')
            fetch('../pages/posts.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content-placeholder').innerHTML = data;
                    setSelectedNavItem('posts')
                })
        }
    },
    {
        regex: /#posts\/(.*)$/,
        handler: async (hash) => {
            const postRoute = `../posts/${hash.split('/').pop()}.html`
            console.log(postRoute)
            try {

                const metadata = await getPostMetadata(postRoute)
                document.getElementById('content-placeholder').innerHTML = `
                    <my-post-layout>
                        <span slot="title">${metadata.titulo}</span>
                    </my-post-layout>
                `
            } catch (err) {
                console.log(err)
                document.getElementById('content-placeholder').innerHTML = `
                    <p>Error...</p>
                `
            }
            setSelectedNavItem('posts')
        }
    },
    {
        regex: /#about$/,
        handler: () => {
            console.log('About')
            fetch('../pages/about.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content-placeholder').innerHTML = data;
                    setSelectedNavItem('about')
                })
        }
    },
    {
        regex: /#resume$/,
        handler: () => {
            console.log('About')
            fetch('../pages/resume.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content-placeholder').innerHTML = data;
                    setSelectedNavItem('resume')
                })
        }
    },
    {
        regex: /#(.*)/,
        handler: () => {
            console.log('404')
            fetch('../pages/404.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content-placeholder').innerHTML = data;
                })
        }
    }
]);

fetch('../pages/home.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('content-placeholder').innerHTML = data;
        setSelectedNavItem('home')
    })

location.hash = "#home"

// const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path] || routes[404];
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("main-page").innerHTML = html;
// };

// const loadPage = async () => {
//     const hash = window.location.hash;

//     if (!hash) {
//         location.hash = "#home"
//         return;
//     }

//     console.log(hash);
//     const route = routes[hash] || routes[404];
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("main-page").innerHTML = html;
// }

// window.addEventListener('hashchange', loadPage)

// loadPage();