import styled from "styled-components";

export const StyledBackground = styled.div`
  display: flex;
  align-items:center;
  margin-top:50px;
  flex-direction:column;
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

export const StyledFormCard = styled.form`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  border-radius:12px;
  background-color: var(--blue-header);
    padding:20px;
`;

export const StyledInput = styled.input`
    width:200px;
    border:none;
    background-color:var(--button);
    border-radius:0.5rem;
    :hover{
        background-color:var(--button-hover);
    }
    :focus{
        outline:none;
    }

`
