import React, { useState } from "react";
import { TaskCreater } from "../components/TaskCreater";
import { GlobalStyle } from "../GlobalStyles";
import Head from "next/head";
import { TaskContext } from "../components/utilities/container/TaskContext";
import { Task } from "../components/Task";
import { TaskList } from "../components/TaskList";

const index = () => {
  const [state, setState] = useState([]);

  return (
    <TaskContext.Provider value={{ state: state, setState: setState }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:300,400,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <TaskCreater></TaskCreater>
      </div>
      <TaskList></TaskList>
      <GlobalStyle></GlobalStyle>
    </TaskContext.Provider>
  );
};
export default index;
