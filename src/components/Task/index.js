import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Task = ({ name }) => (
  <Container>
    <p>{name}</p>
  </Container>
);

Task.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Task;
