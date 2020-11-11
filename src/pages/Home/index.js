import React, { useState } from 'react';
import { Container, SearchBar, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import addImg from '../../assets/icons/ic-add.png';
import NoContent from '../../components/NoContent';
import TaskList from './TaskList';

const Home = () => {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    const newTask = { id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, value };

    setTasks([...tasks, newTask]);
  };

  const handleRemove = (taskId) => {
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <SearchBar>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Button onClick={handleClick}>
          <Icon src={addImg} alt="Adicionar" />
        </Button>
      </SearchBar>
      <Content>
        { !tasks.length ? <NoContent /> : (
          <TaskList
            tasks={tasks}
            removeTask={(task) => handleRemove(task)}
          />
        )}
      </Content>
    </Container>
  );
};

export default Home;
