customElements.define("my-sidebar",
    class extends HTMLElement {
        constructor() {
            super();
            let component = document.getElementById("my-sidebar");
            let mycomponent = component.content;
            const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(mycomponent.cloneNode(true));
        }
    }
);