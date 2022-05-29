import { Row } from "react-bootstrap";
import styled from "styled-components";

export const NavbarContainer = styled(Row)`
  background-color: var(--blue-header);

  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 10px;

  > div:nth-child(2) {
    padding: 0;
    display: flex;
    justify-content: space-between;
    a {
      flex: 1;
    }
  }
  > div:nth-child(4) {
    height: 100%;

    button {
      font-size: 15px;
      padding: 0;
      background: none;
      border: none;
    }
    .show > .btn-primary.dropdown-toggle {
      background: none;
    }
   
  }
  
`;
