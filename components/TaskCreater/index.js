import React from "react";
import { Header, TextInput, Button, Container, TaskOption } from "./style";
import { FaRegBell, FaRegStickyNote } from "react-icons/fa";
import { GoTag } from "react-icons/go";

export const TaskCreater = () => {
  return (
    <Container>
      <Header></Header>
      <TextInput placeholder="What are you planning?" />
      <TaskOption>
        <FaRegBell color="blue" size="18"></FaRegBell>
        <input type="date" />
      </TaskOption>
      <TaskOption>
        <FaRegStickyNote color="grey" size="18"></FaRegStickyNote>
        <input type="text" placeholder="Add note" />
      </TaskOption>
      <TaskOption>
        <GoTag color="grey" size="18"></GoTag>
        <input type="text" placeholder="Category" />
      </TaskOption>

      <Button>Create</Button>
    </Container>
  );
};
