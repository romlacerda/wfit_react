import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Button = ({ children, ...rest }) => <Container {...rest}>{ children }</Container>;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
