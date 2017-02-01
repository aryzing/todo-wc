import { subscribe, getState } from '../../configureStore.js'

export default class TodoListContainer extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'});

  }

  render() {
    const todoList = document.createElement('todo-list')
    let todos = getState().todos.filter(todo => {
      return todo.status === getState().visibilityFilter ||
      getState().visibilityFilter === 'ALL'
    })
    todoList['data-props'] = {todos}
    let currentTodoList = this.shadowRoot.querySelector('todo-list')
    // console.log(currentTodoList)
    if (currentTodoList) {
      this.shadowRoot.replaceChild(todoList, currentTodoList)
    } else {
      this.shadowRoot.appendChild(todoList)
    }
  }

  connectedCallback() {
    subscribe(this.render.bind(this))
    this.render()
  }
}
