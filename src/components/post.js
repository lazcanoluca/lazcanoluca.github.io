// /**
//  * {@link} https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
//  */
// const template = document.createElement("template")
// template.innerHTML = `
//     <h1>${title}</h1>
// `

class PostComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(template.content.cloneNode(true));
        // this.title = shadow.querySelector("[post-title]");
        // this.title.innerText = this.innerText;
        shadow.innerHTML = `
            <h2>Hola, soy un web component.</h2>
        `;
    }
}

customElements.define("post", PostComponent);