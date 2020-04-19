import React, { useState, useRef, useContext } from "react";
import {
  Header,
  TextInput,
  Button,
  Container,
  TaskOption,
  ButtonContainer,
  Form,
} from "./style";
import moment from "moment";
import { FaRegBell, FaRegStickyNote } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { TaskContext } from "../utilities/container/TaskContext";

export const TaskCreater = () => {
  const { state, setState } = useContext(TaskContext);

  // const [state, setState] = useState({
  //   task: "",
  //   date: "",
  //   category: "",
  //   // remind: false,
  //   note: "",
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { category, note, date, title } = event.currentTarget;
    setState([
      ...state,
      {
        category: category.value,
        note: note.value,
        date: date.value,
        title: title.value,
      },
    ]);
    category.value = "";
    note.value = "";
    date.value = "";
    title.value = "";
  };

  const defaultDate = moment(new Date()).format("YYYY-MM-DD");
  console.log(defaultDate);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>New Text</Header>
        <TextInput
          placeholder="What are you planning?"
          name="title"
          id="title"
          required
        />
        <TaskOption>
          <FaRegBell color="blue" size="18"></FaRegBell>
          <input
            type="date"
            defaultValue={defaultDate}
            name="date"
            id="date"
            required
          />
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
      </Form>
    </Container>
  );
};
