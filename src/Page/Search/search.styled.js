import styled from "styled-components";
import { CardMain } from "../../Components/CardMain";

export const Search = styled(CardMain)`
  display: flex;
  flex-direction: column;
`;

export const BoxSearch = styled.div`
margin:10px 0 ;
>div{
    display: flex;
    flex-wrap: wrap;
}
`