import React, { useContext } from "react";
import { TaskContext } from "../utilities/container/TaskContext";

export const Task = () => {
  const task = useContext(TaskContext);
  console.log(task);
  return <div className="container"></div>;
};
