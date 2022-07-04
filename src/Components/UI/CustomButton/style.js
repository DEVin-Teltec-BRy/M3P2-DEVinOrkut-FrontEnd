import styled from "styled-components";

export const ButtonStyled = styled.button`
  font: inherit;
  width: 134.93px;
  height: 30px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${(props) => (props.primary ? "#C8157A" : "#DDD92A")};
  background: ${(props) => (props.primary ? "#e01989" : "#DDD92A")};

  :disabled {
    background: #ccc;
    border: 1px solid #ccc;
    cursor: not-allowed;
  }
  ,
  :hover,
  :active {
    background-color: ${(props) => (props.primary ? "#fa1495" : "#ede91f")};
    color: white;
  }
`;

export const ButtonGroup = styled.span`
  display: flex;
  justify-content: end;
  gap: 20px;
`;
