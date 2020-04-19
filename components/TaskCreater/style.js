import styled from "styled-components";
import { FlexContainer, DefaultContainer } from "../utilities/style";

export const Container = styled(DefaultContainer)`
  margin: 8rem auto;
`;

export const Form = styled.form`
  width: 100%;
  padding: 0 2rem;
`;

export const TextInput = styled.textarea`
  background-color: white;
  color: blue;
  width: 100%;
  padding: 1rem;
  font-size: 4rem;
  border: none;
  height: 20rem;
  resize: none;
  border-bottom: 1px solid grey;
`;

export const Header = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  color: white;
  border: none;
  background-color: #000839;
  padding: 1rem 0rem;
  width: 100%;
  margin: 3rem 0;
  font-size: 2.2rem;
  border-radius: 5px;
`;

export const TaskOption = styled(FlexContainer)`
  padding: 0.8rem 2rem;
  margin-top: 1.4rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  & input {
    border: 0;
    margin-left: 1rem;
    width: 100%;
    padding: 1rem;
  }
`;
