import { Form } from "react-bootstrap";
import styled from "styled-components";

export const FormSearch = styled(Form)`
  display: flex;
  position: relative;
  :focus{
      border:none;
  }
  input{
  padding-right: 50px;

  }
  > button {
    position: absolute;
    right: 5px;
    background: none;
    color: #000;
    border: none;
    border-left: 1px solid var(--card);
    :hover {
      background: none;
      color: #000;
      border: none;
      border-left: 1px solid var(--card);
    }
  }
`;
