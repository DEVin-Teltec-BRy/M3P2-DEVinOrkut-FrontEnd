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
    border-color: var(--pink);
  }
`;
export const StyledInput = styled.input`
  width: 30vw;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
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
  font-family: "Tahoma";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #e01a89;
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

export const StyledPasswordReset = styled.div`
  width: 98%;
  display: flex;
  justify-content: start;
  label {
    margin-left: 12px;
    text-align: start;
    font-family: "Tahoma";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #171719;
  }
  input {
    border: 2px solid #ebebed;
    border-radius: 16px;
    margin-bottom: 34px;
    color: #ffffff;
  }
  button {
    margin-bottom: 33px;
    background: #e01989;
    border: 2px solid #c8157a;
    border-radius: 8px;
    font-family: "Tahoma";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    text-align: center;
  }
  button:hover {
    border: 2px solid #c8157a;
    border-radius: 8px;
  }
`;
