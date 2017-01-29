import TodoButton from '../todo-button'

export default class TodoApp extends HTMLElement {
  constructor() {
    super()

    // NOTE: Define elements in the constructor of the component that uses them
    // this.style.display = 'block'
    const shadowRoot = this.attachShadow({mode: 'open'});

    customElements.define('todo-button', TodoButton)
    const buttonAll = document.createElement('todo-button')
    buttonAll.setAttribute('text', 'All')
    buttonAll.style.display = 'inline'
    shadowRoot.appendChild(buttonAll)

    const buttonCompleted = document.createElement('todo-button')
    buttonCompleted.setAttribute('text', 'Completed')
    buttonCompleted.style.display = 'inline'
    shadowRoot.appendChild(buttonCompleted)

    const buttonPending = document.createElement('todo-button')
    buttonPending.setAttribute('text', 'Pending')
    buttonPending.style.display = 'inline'
    shadowRoot.appendChild(buttonPending)
  }

  connectedCallback() {
    this.style.display = 'block'
  }
}

customElements.define('todo-app', TodoApp)
