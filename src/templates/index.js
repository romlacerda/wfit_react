import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Template = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Template;
