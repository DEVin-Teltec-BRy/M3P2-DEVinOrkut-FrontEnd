import styled from "styled-components";

export const StyledBackground = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    justify-content:center;
    align-items:center;

`
export const StyledFormCard = styled.form`
    width:300px;
    height:400px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
    background-color:var(--blue-header);
    border-radius:8px;
    box-shadow:0px 0px 15px 5px black;
`
export const StyledInput = styled.input`
    width:200px;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:8px;
    background-color:var(--button);
    :hover{
        background-color:var(--button-hover);
    }

`

export const StyledErrorMessage = styled.p`
    color:yellow;
    padding-left:15px;
    padding-right:15px;
    font-size:12px;
`