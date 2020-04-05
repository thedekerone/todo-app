import React from "react";
import { FlexContainer } from "../utilities/style";

export const TaskOption = ({ icon = "icon", text = "text", type = "text" }) => {
  return (
    <FlexContainer>
      <div className="icons">{icon}</div>
      <input type={type} onChange={text} />
    </FlexContainer>
  );
};
