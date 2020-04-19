import React, { useContext } from 'react';
import { TaskContext } from '../utilities/container/TaskContext';
import { Container, TaskDescription, CheckBox } from './style';
export const Task = () => {
  return (
    <Container>
      <TaskDescription>
        <div>Here </div>
        <div>We here</div>
      </TaskDescription>
      <CheckBox />
    </Container>
  );
};
