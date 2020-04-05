import React from 'react';
import { FlexContainer } from '../utilities/style';

export const TaskOption = ({ icon, text }) => {
  return (
    <FlexContainer>
      <div className="icons">{icon}</div>
      <input type="text" onChange={text} />
    </FlexContainer>
  );
};
