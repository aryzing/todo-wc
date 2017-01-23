const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibilityFilter: action.payload.filter
      }
    case 'CREATE_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => {return todo.id !== action.payload.id})
      }
    case 'SET_STATUS':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {...todo, status: action.payload.status}
          } else {
            return todo
          }
        })
      }
    default:
      return state
  }
}
