import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Container, Typography, Paper } from '@mui/material';
import { useAuth } from './context/AuthContext';
import Login from './components/Login';
import LoadingSpinner from './components/LoadingSpinner';  // Importa o spinner de carregamento

// Lazy load dos componentes
const TodoForm = lazy(() => import('./components/TodoForm'));
const TodoList = lazy(() => import('./components/TodoList'));
const FilterButtons = lazy(() => import('./components/FilterButtons'));

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          {isAuthenticated ? (
            <Suspense fallback={<LoadingSpinner />}>
              <Typography variant="h4" component="h1" gutterBottom align="center">
                Gerenciador de Tarefas
              </Typography>
              <TodoForm />
              <FilterButtons />
              <TodoList />
            </Suspense>
          ) : (
            <>
              <Typography variant="h4" component="h1" gutterBottom align="center">
                Faça login para continuar
              </Typography>
              <Login />
            </>
          )}
        </Paper>
      </Container>
    </Provider>
  );
};

export default App;
