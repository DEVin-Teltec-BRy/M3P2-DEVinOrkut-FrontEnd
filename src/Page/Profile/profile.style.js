import styled from "styled-components";
import { CardContainer } from "../../Components/CardMain/cardMain.styled";

export const ProfileContent = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
  >button{
    position: absolute;
    right: 20px ;
    top: 26px;
    display:flex;
    align-items:center ;
    gap: 5px;
  }
`;
export const ContentInfo = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  > div {
    flex: 1;
  }
  > div:nth-child(2) {
    ${({ expand }) =>
      expand
        ? "flex:2;"
        : ""}
  }

  ${({ border }) =>
    border
      ? "border-top: 1px solid; border-bottom:1px solid; margin: 10px 0 ;"
      : ""}
`;
