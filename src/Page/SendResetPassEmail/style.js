import styled from "styled-components";

export const StyledBackground = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 100vh;
  background-color: white;
`;
export const StyledFormCard = styled.form`
  margin-top: 30vh;
  width: 40vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  div:nth-child(1),
  div:nth-child(2) {
    width: 25rem;
  }
  background-color: white;
  .form-check-input:checked {
    background-color: var(--pink);
    border-color:var(--pink);
}
`;
export const StyledInput = styled.input`
  width: 30vw;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: white;
  :hover {
    background-color: var(--button-hover);
  }
`;
export const StyledSubmitInput = styled.input`
  width: 30vw;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #e01989;
  border: none;
  color: white;
  font-weight: bold;
  :hover {
    border: 1px solid #e01989;
  }
`;
export const StyledLeave = styled.button`
  width: 30vw;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: #e01989;
  border: 1px solid #e01989;
  background-color: white;

  font-weight: bold;
  :hover {
    opacity: 0.7;
  }
`;
export const StyledSubmit = styled.input`
  width: 150px;
  height: 25px;
  background-color: #e01989;
  display: flex;
  outline: none;
  border: none;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  :hover {
    background-color: var(--button-hover);
  }
`;

export const StyledErrorMessage = styled.p`
  color: yellow;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
`;
