import styled from 'styled-components';
import { FlexContainer } from '../utilities/style';

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 8rem auto;
  background-color: teal;
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
`;

export const Header = styled.h3`
  border-bottom: 1px solid grey;
  text-align: center;
`;

export const Button = styled.button`
  color: white;
  text-align: center;
  border: none;
  background-color: #0a2463;
  padding: 1rem 3rem;
  width:100%;

  font-size: 2.4rem;
  border-radius: 5px;
  margin: 2rem;
`;

export const TaskOption = styled(FlexContainer)`
  padding: 0.8rem 0;

  & input {
    border: 0;
    margin-left: 1rem;
    width: 100%;
    padding: 1rem;
  }
`;
