import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

export const Navlink = styled(Link)`
  border-radius: 0.5rem;
  background-color: var(--button);
  color: var(--black);
  border: 1px solid transparent;
  width: 100%;
  padding: 5px;
  margin-right: 5px;
  span {
    margin: 0 0.4rem;
  }
  text-decoration: none;

  :hover {
    background-color: var(--button-hover);
  }
`;
export const MainButton = styled(Button)`
  background: ${({ variant }) => (variant ? variant : "var(--pink)")};
  border: 1px solid ${({ variant }) => (variant ? variant : "var(--pink)")};
  :hover {
    background: ${({ variant }) => (variant ? variant : "var(--pink)")};
    border: 1px solid ${({ variant }) => (variant ? variant : "var(--pink)")};
    opacity: 0.7;
  }
  :focus {
    background: ${({ variant }) => (variant ? variant : "var(--pink)")};
    border: 1px solid ${({ variant }) => (variant ? variant : "var(--pink)")};
    outline: ;
  }
`;
