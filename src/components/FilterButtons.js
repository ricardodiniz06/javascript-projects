import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions/todoActions';
import { ButtonGroup, Button } from '@mui/material';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todo.filter);

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ marginTop: 2 }}>
      <Button
        onClick={() => dispatch(setFilter('all'))}
        color={filter === 'all' ? 'primary' : 'secondary'}
      >
        Todas
      </Button>
      <Button
        onClick={() => dispatch(setFilter('completed'))}
        color={filter === 'completed' ? 'primary' : 'secondary'}
      >
        Concluídas
      </Button>
      <Button
        onClick={() => dispatch(setFilter('incomplete'))}
        color={filter === 'incomplete' ? 'primary' : 'secondary'}
      >
        Não Concluídas
      </Button>
    </ButtonGroup>
  );
};

export default FilterButtons;
