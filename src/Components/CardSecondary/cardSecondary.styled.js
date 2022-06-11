import styled from "styled-components";
import { CardContainer } from "../CardMain/cardMain.styled";

export const CardContainerSecondary = styled(CardContainer)`
width: ${({size})=> size === 'md'?'clamp(7rem,8.5rem,10rem);':'clamp(7rem,7.5rem,10rem);'};
 
  max-width: ${({size})=> size === 'md'?'7.7rem;':'10rem;'};
  max-height: ${({size})=> size === 'md'?'8.9rem;':'8.5rem;'};
border:none;
  padding: 10px ;
  text-align:center;
  border-radius: 10px;
  cursor:pointer;
  img{
      border-radius: ${({round})=> round ? '50%;': '10px;'} ;
      height: ${({size})=> size === 'md'?'5rem;':'5.45rem;'};
      margin-bottom: 10px ;
  }
  div{
    overflow: hidden;
    font-size:15px;
    
  }
`;
