import React from 'react';
import PropTypes from 'prop-types';
import Task from '../../components/Task';

const TaskList = ({ tasks, removeTask }) => (
  <div style={{ height: '280px', overflowY: 'scroll' }}>
    { tasks.map((task) => <Task key={task.id} task={task} removeTask={removeTask} />)}
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.shape([]),
  removeTask: PropTypes.shape(() => {}).isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
