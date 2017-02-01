export default class TodoList extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'});
  }

  render() {
    if (this['data-props'].todos) {
      this['data-props'].todos.forEach(todo => {
        let div = document.createElement('div')
        div.innerHTML = todo.text
        this.shadowRoot.appendChild(div)
      })
    }
  }

  connectedCallback() {
    this.render()
  }
}
