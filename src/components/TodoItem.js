import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, removeTask } from '../redux/actions/todoActions';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete(task.id));
  };

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        edge="start"
        checked={task.completed}
        tabIndex={-1}
        disableRipple
        onClick={handleToggle}
      />
      <ListItemText
        primary={task.text}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default TodoItem;
