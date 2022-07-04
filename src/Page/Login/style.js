import styled from "styled-components";
import lab365 from "../../Assets/images/LAB365.png";

export const PinkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(180deg, rgba(224, 25, 137, 0.6) 0%, #e01989 100%);
  height: 100vh;
  width: 60vw;
`;

export const LoginHeader = styled.div`
  margin-left: 40px;
  h1 {
    margin-top: 64px;
    color: black;
  }
  p {
    font-weight: 400;
    width: 35vw;
    margin-top: 16px;
  }
`;

export const ForgotPass = styled.p`
  margin-right: 4px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #e01989;
  align-self: flex-end;
  text-decoration: underline;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const CreateAccountStyle = styled.span`
  margin-left: 16px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: #e01989;
  text-decoration: underline;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const LastLine = styled.div`
  margin-right: 6vw;
  margin-bottom: 64px;
  text-align: end;
  display: inline-block;
`;
export const LabLogo = styled.div`
  width: 150px;
  height: 25px;
  background-image: url(${lab365});
  background-position: contain;
`;
export const LabLogoDiv = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
  background-color: white;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 35px;
  padding: 10px;
`;

export const SendEmailModal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  left: 3vw;
  top: 5vh;
  width: 32vw;
  height: 90vh;
  background-color: #e01989;
  border-radius: 12px;
  z-index: 100;
  box-shadow: 0px 0px 135px 10px black;
`;
export const SendEmailForm = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  > button {
    background: var(--pink);
    border: 1px solid var(--pink);
    min-width: 5rem;
    :hover {
      background: var(--pink);
      opacity: 0.7;
      border: 1px solid var(--pink);
    }
  }
`;
export const ModalStripe = styled.div`
  padding: 20px;
  gap: 20px;
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;
export const AlignLogin = styled.span`
  width: 25rem;

  display: flex;
  justify-items: center;
  label {
    width: 40%;
    margin: 0;
    padding: 0;
  }
  button {
    margin: 0;
    background: var(--pink);
    border: 1px solid var(--pink);
    min-width: 5rem;
    :hover {
      background: var(--pink);
      opacity: 0.7;
      border: 1px solid var(--pink);
    }
  }
`;

export const ContentModal = styled.div`
  color: #e72318;
  text-align: center;
`;

export const StyledInputLogin = styled.div`
  margin-top: -253px;
  display: flex;
  width: 100%;
  label {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: start;
    margin-left: 8px;
  }

  label:last-of-type {
    margin-top: 32px;
  }
  input {
    border: 2px solid #ebebed;
    border-radius: 16px;
  }
`;
