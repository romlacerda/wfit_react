import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Icon = ({ src, alt }) => (
  <Container>
    <img src={src} alt={alt} />
  </Container>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
