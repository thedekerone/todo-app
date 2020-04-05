import React from "react";
import { TaskCreater } from "../components/TaskCreater";
import { GlobalStyle } from "../GlobalStyles";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:300,400,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <TaskCreater></TaskCreater>
      </div>
      <GlobalStyle></GlobalStyle>
    </>
  );
};
export default index;
