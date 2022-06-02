import styled from 'styled-components';

export const ButtonStyled = styled.button`
  font: inherit;
  width: 134.93px;
  height: 30px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${(props) => (props.primary ? '#C8157A' : '#DDD92A')};
  background: ${(props) => (props.primary ? '#e01989' : '#DDD92A')};

  :hover,
  :active {
    background-color: ${(props) => (props.primary ? '#fa1495' : '#ede91f')};
    color: white;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0.75em 0;
  padding: 1rem;
`;
