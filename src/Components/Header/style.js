import { Badge, Row } from "react-bootstrap";
import styled from "styled-components";

export const NavbarContainer = styled(Row)`
  background-color: var(--blue-header);
  padding: 10px;
  max-width: 85rem;
  margin: auto;

  > div img{
    cursor: pointer;
  }
  > div:nth-child(2) {
    padding: 0;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    a {
      flex: 1;
    }
  }

  > div:nth-child(3) {
    display: flex;
    a {
      width: 50px;
    }
    padding: 0;
  }
  > div:nth-child(4) {
    height: 100%;
    width: 1.5rem;
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
export const MainContainer = styled.div`
  background-color: var(--blue-header);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
export const BadgeNoty = styled(Badge)`
  position: absolute;
  top: 2px;
  left: -15px;
  background-color: var(--pink) !important;

  & {
    animation: pulse 0.8s infinite;
    margin: 0 auto;
    display: table;
    animation-direction: alternate;
    -webkit-animation-name: pulse;
    animation-name: pulse;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
      filter: brightness(100%);
    }
    100% {
      transform: scale(1.1);
      filter: brightness(200%);
    }
  }
`;
