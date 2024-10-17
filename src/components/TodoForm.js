import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/todoActions';
import { TextField, Button, Box } from '@mui/material';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({
        id: Date.now(),
        text: task,
        completed: false,
      }));
      setTask('');  // Limpar o campo de entrada
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
      <TextField
        label="Nova tarefa"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
        sx={{ marginRight: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Adicionar
      </Button>
    </Box>
  );
};

export default TodoForm;
