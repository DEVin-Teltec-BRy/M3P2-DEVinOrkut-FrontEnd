import { Button } from "react-bootstrap";
import styled from "styled-components";




export const MainSection = styled.section`
   display: flex;
   flex-direction: column;
   width: 92%;
   height: 100%; 
`;

export const DivTitle = styled.div`
    max-height: 10%
    margin: 1.2rem auto auto auto;
    text-align: center;
    h1{
        font-size: 2.4rem;
        font-weight: 490;
    }
`;
export const DivContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 22%;
    .img-container{
       display: flex;
       width: 45%;  
       img{
              width: 100%;
       }
   } 
   .infos{
         margin-left: 20px;
         display: flex;
         flex-direction: column;
         @media (max-width: 768px) {
            margin: 10px auto auto auto;
         }
         ul{
             padding-left: 0 !important;
             li{
                 margin: 8px auto auto auto;
             }
             span{
                 font-weight: bold;
             }
        }
        form{
            margin-top: 25px;
            label{
                color: #cccdc8;
                font-size: 0.8rem;
                font-weight: bold;
            }
        }
   }
   @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const DivDescription = styled.div`
    height: 25%;
    display: flex;
    flex-direction: column;
    text-align: justify;
    span{
        font-weight: bold;
    }
    p{
        margin-top: 20px;
    }
    
`;
export const DivForum = styled.div`
    height: 43%;
    display: flex;
    flex-direction: column;
    .top-forum{
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        span{
            font-weight: bold;
        }
        button{
            border: none;
            border-radius: 8px;
            background-color: #e01989;
            color: white;
            font-weight: bold;
            letter-spacing: 1px;
            padding: 2px 15px 2px 15px;
        }
     }

    .body-forum{
        margin-top: 20px;
     }
    
`;

export const ButtonRequest = styled(Button)`
    background-color: ${({ variant }) => variant === 'success' ? '#00C851' : '#D32F2F'};
    color: blue;
`