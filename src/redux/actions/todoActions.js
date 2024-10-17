// Ação para adicionar uma tarefa
export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  // Ação para alternar o estado de uma tarefa (completada ou não)
  export const toggleComplete = (id) => {
    return {
      type: 'TOGGLE_COMPLETE',
      payload: id,
    };
  };
  
  // Ação para remover uma tarefa
  export const removeTask = (id) => {
    return {
      type: 'REMOVE_TASK',
      payload: id,
    };
  };
  
  export const setFilter = (filter) => {
    return {
      type: 'SET_FILTER',
      payload: filter,
    };
  };
  