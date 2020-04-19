import React, { useContext } from "react";
import { TaskContext } from "../utilities/container/TaskContext";
import moment from "moment";
import { Container, TaskDescription, CheckBox } from "./style";
export const Task = ({ title = "", note = "", category = "", date = "" }) => {
  return (
    <Container>
      <TaskDescription>
        <h2>{title}</h2>
        <div>{moment(date, "YYYY-MM-DD").format()}</div>
      </TaskDescription>
      <CheckBox />
    </Container>
  );
};
