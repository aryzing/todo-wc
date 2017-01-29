export default class TodoButton extends HTMLElement {
  static get observedAttributes() {
    return ['text'];
  }

  constructor() {
    super()

    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<div>${this.getAttribute('text') || 'button'}</div>`

  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    let shadowRoot = this.shadowRoot;
    shadowRoot.innerHTML = `<div>${newVal || 'button'}</div>`
  }

  connectedCallback() {
    this.style.display = 'inline-block'
    this.style.padding = '0.5em'
  }
}
