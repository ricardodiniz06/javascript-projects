import { combineReducers } from 'redux';
import todoReducer from './todoReducer';  // Importa o reducer de tarefas

// Combina os reducers em um rootReducer
const rootReducer = combineReducers({
  todo: todoReducer,  // Aqui você pode adicionar mais reducers, se necessário
});

export default rootReducer;
