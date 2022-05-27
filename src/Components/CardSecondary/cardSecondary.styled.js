import styled from "styled-components";
import { CardContainer } from "../CardMain/cardMain.styled";

export const CardContainerSecondary = styled(CardContainer)`
  width: ${({size})=> size === 'md'?'7.5rem;':'6.6rem;'};
  height: ${({size})=> size === 'md'?'8.5rem;':'8.5rem;'};
border:none;
  padding: 10px ;
  text-align:center;
  border-radius: 10px;
  cursor:pointer;
  img{
      border-radius: ${({round})=> round ? '50%;': '10px;'} ;
      height: ${({size})=> size === 'md'?'5rem;':'5.40rem;'};
      margin-bottom: 10px ;
  }

`;
