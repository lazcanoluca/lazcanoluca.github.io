// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// };

const routes = {
    404: "/pages/404.html",
    "#home": "/pages/home.html",
    "#portfolio": "/pages/portfolio.html",
    "#about": "/pages/about.html",
    "#posts": "/pages/building.html",
    "#resume": "/pages/building.html"
};

// const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path] || routes[404];
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("main-page").innerHTML = html;
// };

const loadPage = async () => {
    const hash = window.location.hash;

    if (!hash) {
        location.hash = "#home"
        return;
    }

    console.log(hash);
    const route = routes[hash] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
}

window.addEventListener('hashchange', loadPage)

loadPage();