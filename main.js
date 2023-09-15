// JavaScript for loading content into the main content area
const contentContainer = document.getElementById("content");

function loadPage(pageName) {
    fetch(pageName)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
}

// Initial load of the Home page
loadPage("index.html");
