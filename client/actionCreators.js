var id = 0;
function createId() {
  return id++
}

export const showAll = () => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {filter: 'ALL'}
})

export const showCompleted = () => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {filter: 'COMPLETED'}
})

export const showPending = () => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {filter: 'PENDING'}
})

export const createTodo = (text) => ({
  type: 'CREATE_TODO',
  payload: {
    todo: {
      text,
      id: createId(),
      status: 'PENDING'
    }
  }
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: {id}
})

export const setStatusPending = (id) => ({
  type: 'SET_STATUS',
  payload: {id, status: 'PENDING'}
})

export const setStatusCompleted = (id) => ({
  type: 'SET_STATUS',
  payload: {id, status: 'COMPLETED'}
})
