import styled from "styled-components";
import { DefaultContainer } from "../utilities/style";
export const Container = styled(DefaultContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  padding: 2px;
  border: 2px solid black;
`;

export const TaskDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
