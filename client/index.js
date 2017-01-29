import { createStore } from 'redux'
import { reducer } from './reducer'
import { TodoApp } from './components/todo-app'

const store = createStore(reducer)

document.querySelector('#app').appendChild(document.createElement('todo-app'))
