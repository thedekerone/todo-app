import React, { useContext } from "react";
import { TaskContext } from "../utilities/container/TaskContext";
import { Task } from "../Task";
import { DefaultContainer } from "../utilities/style";

export const TaskList = () => {
  const { state } = useContext(TaskContext);
  return (
    <DefaultContainer>
      {state.length !== 0 ? (
        state.map((task) => <Task title={task.title} date={task.date}></Task>)
      ) : (
        <h1>There isn't any task</h1>
      )}
    </DefaultContainer>
  );
};
