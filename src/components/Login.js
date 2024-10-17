import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';  // Usando o contexto de autenticação
import { TextField, Button, Box } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();  // Obtém a função de login do contexto

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Usuário"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Entrar
      </Button>
    </Box>
  );
};

export default Login;
