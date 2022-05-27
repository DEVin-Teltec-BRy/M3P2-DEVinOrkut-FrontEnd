import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const NavbarContainer = styled(Navbar)`
  background-color: var(--blue-header);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  & .nav-link {
    margin-right: 1rem;
  }

  & span {
    margin-right: 0.4rem;
  }

  & .signin a.nav-link {
    color: var(--white);
  }

  @media (max-width: 991px) {
    .navbar-nav {
      margin-top: 1rem;
    }

    .navbar-nav a {
      background: transparent !important;
      color: var(--white) !important;
    }

    span {
      margin-right: 0.4rem;
    }

    :hover {
      color: var(--button-hover) !important;
    }
  }
`;
