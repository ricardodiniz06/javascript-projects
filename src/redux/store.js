import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Com o uso de chaves
import rootReducer from './reducers/rootReducer';

// Importa as funções de localStorage
import { loadState, saveState } from '../utils/localStorage';

// Carrega o estado persistido do localStorage (se existir)
const persistedState = loadState();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)  // Removemos temporariamente o composeWithDevTools
  );

// Salva o estado no localStorage sempre que ele mudar
store.subscribe(() => {
  saveState({
    tasks: store.getState().todo.tasks, // Apenas salva as tarefas no localStorage
  });
});

export default store;
