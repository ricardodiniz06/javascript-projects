// Carrega o estado do localStorage
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('tasks');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  // Salva o estado no localStorage
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('tasks', serializedState);
    } catch (err) {
      // Trata erros, se necessário
    }
  };
  