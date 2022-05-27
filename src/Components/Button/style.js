import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navlink = styled(Link)`
    border-radius: 0.5rem;
    background-color: var(--button);
    color: var(--black);
    border: 1px solid transparent;
    width: 100%;
    padding: 5px ;
    margin-right:5px ;
    span{
        margin: 0 0.4rem;
    }
    text-decoration:none ;

    :hover{
        background-color: var(--button-hover);
    }

`;
