import styled from "styled-components";
import { FlexContainer } from "../utilities/style";

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

export const TextInput = styled.input`
  background-color: white;
  color: blue;
`;

export const Header = styled.h1`
  border-bottom: 1px solid grey;
`;

export const Button = styled.button`
  background-color: teal;
  color: white;
  text-align: center;
`;

export const TaskOption = styled(FlexContainer)`
  padding: 0.8rem 0;

  & input {
    border: 0;
    margin-left: 1rem;
  }
`;
