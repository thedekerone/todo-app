import React, { useState, useRef } from "react";
import {
  Header,
  TextInput,
  Button,
  Container,
  TaskOption,
  ButtonContainer,
} from "./style";
import { FaRegBell, FaRegStickyNote } from "react-icons/fa";
import { GoTag } from "react-icons/go";

export const TaskCreater = () => {
  const task = useRef(null);

  const [state, setState] = useState({
    task: "",
    date: "",
    category: "",
    // remind: false,
    note: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { category, note, date, task } = event.currentTarget;
    setState({
      category: category.value,
      note: note.value,
      date: date.value,
      task: task.value,
    });
    category.value = "";
    note.value = "";
    date.value = "";
    task.value = "";
  };

  console.log(state);

  return (
    <Container onSubmit={handleSubmit}>
      <Header>New Text</Header>
      <TextInput placeholder="What are you planning?" name="task" id="task" />
      <TaskOption>
        <FaRegBell color="blue" size="18"></FaRegBell>
        <input type="date" name="date" id="date" />
      </TaskOption>
      <TaskOption>
        <FaRegStickyNote color="grey" size="18"></FaRegStickyNote>
        <input type="text" name="note" id="note" placeholder="Add note" />
      </TaskOption>
      <TaskOption>
        <GoTag color="grey" size="18"></GoTag>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
        />
      </TaskOption>
      <ButtonContainer>
        <Button type="submit">Create</Button>
      </ButtonContainer>
    </Container>
  );
};
