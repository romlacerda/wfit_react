import React from 'react';
import { Container, SearchBar, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import addImg from '../../assets/icons/ic-add.png';
import NoContent from '../../components/NoContent';

const Home = () => (
  <Container>
    <SearchBar>
      <Input />
      <Button>
        <Icon src={addImg} alt="Adicionar" />
      </Button>
    </SearchBar>
    <Content>
      <NoContent />
    </Content>
  </Container>
);

export default Home;
