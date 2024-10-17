import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { List, Typography } from '@mui/material';

const TodoList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const filter = useSelector((state) => state.todo.filter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  if (!filteredTasks || filteredTasks.length === 0) {
    return <Typography variant="body1">Nenhuma tarefa correspondente ao filtro.</Typography>;
  }

  return (
    <List>
      {filteredTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TodoList;
