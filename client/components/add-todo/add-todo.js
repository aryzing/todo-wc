export default class AddTodo extends HTMLElement {
  constructor() {
    super()

    let shadowRoot = this.attachShadow({mode: 'open'});

    const input = document.createElement('input')
    shadowRoot.appendChild(input)

    const todoButton = document.createElement('todo-button')
    todoButton.setAttribute('text', 'Add')
    todoButton.addEventListener('click', () => {
      console.log(input.value)
      input.value = '';
    })
    shadowRoot.appendChild(todoButton)
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
  }

  connectedCallback() {
    this.style.display = 'block'
    this.style.padding = '0.5em'
  }
}
