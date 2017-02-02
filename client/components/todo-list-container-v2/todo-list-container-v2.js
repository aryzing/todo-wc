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
    this.shadowRoot.innerHTML = ''
    todos.forEach(todo => {
      // create <todo-item>
      const todoItem = document.createElement('todo-item')
      // attach props to it
      todoItem['data-props'] = {
        todo,
        clickHandler() {
          dispatch(/*???*/)
        }
      }
      // attach click handler to it
    })
  }

  connectedCallback() {
    subscribe(this.render.bind(this))
    this.render()
  }
}
