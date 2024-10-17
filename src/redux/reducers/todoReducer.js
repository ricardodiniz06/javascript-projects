const initialState = {
    tasks: [], // Inicialmente, a lista de tarefas é vazia
    filter: 'all',
    loading: false,
    error: null,
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'TOGGLE_COMPLETE':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,  // Define o filtro atual
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  
  
  