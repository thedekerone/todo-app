import React from 'react';
import { TaskCreater } from '../components/TaskCreater';
import { GlobalStyle } from '../GlobalStyles';
const index = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <h1>
        <TaskCreater></TaskCreater>
      </h1>
    </>
  );
};
export default index;
