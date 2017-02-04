import { showAll, showCompleted, showPending } from '../../actionCreators'
import { dispatch } from '../../configureStore'

export default class TodoApp extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'});

    const addTodo = document.createElement('add-todo')
    shadowRoot.appendChild(addTodo)

    const todoListContainer = document.createElement('todo-list-container-v2')
    shadowRoot.appendChild(todoListContainer)

    const buttonAll = document.createElement('todo-button')
    buttonAll.setAttribute('text', 'All')
    buttonAll.style.display = 'inline'
    buttonAll['data-props'] = {
      clickHandler() {
        dispatch(showAll())
      }
    }
    shadowRoot.appendChild(buttonAll)

    const buttonCompleted = document.createElement('todo-button')
    buttonCompleted.setAttribute('text', 'Completed')
    buttonCompleted.style.display = 'inline'
    buttonCompleted['data-props'] = {
      clickHandler() {
        dispatch(showCompleted())
      }
    }
    shadowRoot.appendChild(buttonCompleted)

    const buttonPending = document.createElement('todo-button')
    buttonPending.setAttribute('text', 'Pending')
    buttonPending.style.display = 'inline'
    buttonPending['data-props'] = {
      clickHandler() {
        dispatch(showPending())
      }
    }

    shadowRoot.appendChild(buttonPending)
  }

  connectedCallback() {
    this.style.display = 'block'
  }
}
