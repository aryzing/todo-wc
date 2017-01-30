import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
export const dispatch = store.dispatch
export const getState = store.getState
export const subscribe = store.subscribe
