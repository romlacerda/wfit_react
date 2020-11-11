import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import icDelete from '../../assets/icons/ic-delete.png';
import Icon from '../Icon';

const Task = ({ task, removeTask }) => {
  const { id, value } = task;

  return (
    <Container>
      <p>{value}</p>
      <span onClick={() => removeTask(id)}>
        <Icon src={icDelete} alt="Delete Task" />
      </span>
    </Container>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  removeTask: PropTypes.string.isRequired,

};

export default Task;
