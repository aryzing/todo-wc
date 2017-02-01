import { subscribe, getState } from '../../configureStore.js'

export default class TodoListContainer extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'});

  }

  render() {
    let todos = getState().todos.filter(todo => {
      return todo.status === getState().visibilityFilter ||
      getState().visibilityFilter === 'ALL'
    })
    const currentTodoList = this.shadowRoot.querySelector('todo-list')
    if (currentTodoList) {
      currentTodoList['data-props'] = {todos}
      currentTodoList.render()
    } else {
      const todoList = document.createElement('todo-list')
      todoList['data-props'] = {todos}
      this.shadowRoot.appendChild(todoList)
    }
  }

  connectedCallback() {
    subscribe(this.render.bind(this))
    this.render()
  }
}
