class PostComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<h1>Hi, soy custom.</h1>`;
    }
}

window.customElements.define('post-component', PostComponent);

