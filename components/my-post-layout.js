class MyPostLayout extends HTMLElement {
    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
            <link rel="stylesheet" href="../global.css">
            <div class="page-title-block">
                <h1 lang="en"><slot name="title"></slot></h1>
                <h2 lang="en"><slot name="subtitle"></slot></h2>
            </div>
            <div>
                <slot name="content"></slot>
            </div>
        `

        this._shadow.innerHTML = '';
        this._shadow.append(template.content.cloneNode(true));
    }
}

customElements.define('my-post-layout', MyPostLayout);