import React from 'react';
import { Header, TextInput } from 'style';
// import { FlexContainer } from 'style';
import { TaskOption } from '../TaskOptions/index';

const TaskCreater = () => {
  return (
    <>
      <Header></Header>
      <TextInput />
      <TaskOption icon={icon} text={text} />
      <TaskOption icon={icon} text={text} />
      <TaskOption icon={icon} text={text} />
      <Button />
    </>
  );
};
