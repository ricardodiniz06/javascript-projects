import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Com o uso de chaves
import rootReducer from './reducers/rootReducer';


import { loadState, saveState } from '../utils/localStorage';


const persistedState = loadState();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)  // 
  );


store.subscribe(() => {
  saveState({
    tasks: store.getState().todo.tasks, 
  });
});

export default store;
