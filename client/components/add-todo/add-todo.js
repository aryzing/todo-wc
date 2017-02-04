// TODO: Make alternativve version passing props

import { dispatch } from '../../configureStore'
import { createTodo } from '../../actionCreators'

export default class AddTodo extends HTMLElement {
  constructor() {
    super()

    let shadowRoot = this.attachShadow({mode: 'open'});

    const input = document.createElement('input')
    shadowRoot.appendChild(input)

    const todoButton = document.createElement('todo-button')
    todoButton.setAttribute('text', 'Add')
    todoButton['data-props'] = {
      clickHandler() {
        dispatch(createTodo(input.value))
        input.value = '';
      }
    };

    shadowRoot.appendChild(todoButton)
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
  }

  connectedCallback() {
    this.style.display = 'block'
    this.style.padding = '0.5em'
  }
}
