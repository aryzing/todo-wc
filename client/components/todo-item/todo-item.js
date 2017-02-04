export default class TodoItem extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'});
  }

  render() {
    const { todo } = this['data-props']
    const shadowRoot = this.shadowRoot
    shadowRoot.innerHTML = `<div ${todo.status === 'COMPLETED' ? 'style=text-decoration:line-through;' : ''}>${todo.text}</div>`
  }

  connectedCallback() {
    this.addEventListener('click', this['data-props'].clickHandler)
    this.render()
  }
}
