export default class TodoApp extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'});

    const addTodo = document.createElement('add-todo')
    shadowRoot.appendChild(addTodo)

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
