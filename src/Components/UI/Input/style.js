import styled from "styled-components";

export const FormatStyles = styled.div`
  display: flex;
  input {
    padding: 1rem;
    height: 50px;
  }
  label {
    text-align: start;
  }
`;

export const InputStyled = styled.input`
  font: inherit;
  width: 100%;
  border: 2px solid #ebebed;
  margin-bottom: 10px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.26);
  padding: 1rem;
  font-size: 20px;
`;

export const TextAreaStyled = styled.textarea`
  font: inherit;
  width: 100%;
  border: 1px groove #ccc;
  padding: 1rem;
  border-radius: 7px;
  resize: none;
`;

export const FullNameSpan = styled.span`
  display: inline-block;
  height: 100px;
  width: 100%;
  max-width: 71vw;
  input {
    width: 38vw;
  }
`;
export const CpfSpan = styled.span`
  margin-left: 32px;
  display: inline-block;
  height: 100px;
  width: 100%;
  max-width: 71vw;
  input {
    width: 16vw;
  }
`;

export const FullNameAndCpfSpan = styled.span`
  display: flex;
  margin-bottom: 64px;
`;

export const BirthDateAndGender = styled.span`
  display: flex;
  margin-bottom: 64px;
`;

export const BirthDateSpan = styled.span`
  display: inline-block;
  height: 100px;
  width: 100%;
  max-width: 71vw;
  input {
    width: 30vw;
  }
`;

export const GenderSpan = styled.span`
  margin-left: 32px;
  display: inline-block;
  height: 100px;
  width: 100%;
  max-width: 71vw;
  input {
    width: 24vw;
  }
  select {
    width: 24vw;
    height: 50px;
    border: 2px solid #ebebed;
    margin-bottom: 10px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.26);
    font-size: 20px;
  }
`;
