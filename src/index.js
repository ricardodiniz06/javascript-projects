import React from 'react';
import { createRoot } from 'react-dom/client';  // Usando a API de React 18
import App from './App';
import { AuthProvider } from './context/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container);  // Cria a raiz usando a nova API

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
