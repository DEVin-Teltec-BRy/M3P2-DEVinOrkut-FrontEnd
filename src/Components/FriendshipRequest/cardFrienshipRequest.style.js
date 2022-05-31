import { Button } from "react-bootstrap";
import styled from "styled-components";

export const CardFrienshipRequest = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 150px;
    background: var(--card);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 15px;
    img{
      border-radius: ${({round})=> round ? '50%;': '10px;'} ;
      height: ${({size})=> size === 'md'?'5rem;':'5.40rem;'};
      margin: 0 20px;
      justify-self: flex-start;
    }
`;
export const FriendPresenter = styled.div`
    display: flex;
    align-items: center;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    width: 100%;
`;

export const ButtonRequest = styled(Button)`
    background-color: ${({variant})=> variant === 'success'?'#00C851':'#D32F2F'};
    color: blue;
`