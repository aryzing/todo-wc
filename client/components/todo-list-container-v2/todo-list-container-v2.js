import { subscribe, getState, dispatch } from '../../configureStore.js'
import { setStatusPending, setStatusCompleted } from '../../actionCreators.js'

export default class TodoListContainerV2 extends HTMLElement {
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
          console.log('Click handler executed.')
          // needs access to this individual todo
          const status = todoItem['data-props'].todo.status
          const id = todoItem['data-props'].todo.id
          if (status === 'PENDING') {
            dispatch(setStatusCompleted(id))
          } else {
            dispatch(setStatusPending(id))
          }
        }
      }
      this.shadowRoot.appendChild(todoItem)
    })
  }

  connectedCallback() {
    subscribe(this.render.bind(this))
    this.render()
  }
}
