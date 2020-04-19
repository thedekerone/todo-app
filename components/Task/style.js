import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
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
