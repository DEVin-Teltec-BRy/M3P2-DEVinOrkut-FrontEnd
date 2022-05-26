import { Nav } from "react-bootstrap";
import styled from "styled-components";

export const Navlink = styled(Nav.Link)`
    border-radius: 0.5rem;
    background-color: var(--button);
    color: var(--black);
    border: 1px solid transparent;
    width: 100%;

    span{
        margin: 0 0.4rem;
    }

    :hover{
        background-color: var(--button-hover);
    }
}
`;
