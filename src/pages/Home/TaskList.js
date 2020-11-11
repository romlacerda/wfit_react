import React from 'react';
import PropTypes from 'prop-types';
import Task from '../../components/Task';

const TaskList = ({ tasks }) => (
  <div>
    { tasks.map((task) => <Task name={task} />)}
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.shape([]),
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
