import React from 'react';
import { Container, SearchBar } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import addImg from '../../assets/icons/ic-add.png';

const Home = () => (
  <Container>
    <SearchBar>
      <Input />
      <Button>
        <Icon src={addImg} alt="Adicionar" />
      </Button>
    </SearchBar>
  </Container>
);

export default Home;
