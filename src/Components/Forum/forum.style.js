import styled from "styled-components";



export const MainDivCard = styled.div`
    display: flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    .img {
        img {
          max-width: 5.45rem;  
          border-radius: 50%;
          height:5.45rem;
          margin-bottom: 10px ;
        }
    }
    .content{
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
        .title{
            span{
                font-size: 0.9rem;
                font-weight: bold;
                cursor: pointer;
            }
        }
        .infos{
            margin-top: 20px;
            display: flex;
            align-content: center;
            justify-content: flex-start;
            align-items: center;
            gap: 20px;
            p{
                font-weight: 450;
                font-size: 0.8rem;
            }
        }
    }
`;


export const ForumDivCard = styled.div`
    display: flex;
    padding: 0.7rem;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgb(224 25 137 / 15%) 0px 0px 5px 0px;
    width: 100%;
    border-radius: 12px;
    .img {
        img {
          max-width: 5.45rem;  
          border-radius: 50%;
          height:5.45rem;
          margin-bottom: 10px;
          cursor: pointer;
        }
    }
    .content{
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
        width: 100%;
        .title{
            display: flex;
            align-content: center;
            justify-content: space-between;
            align-items: flex-start;
            span{
                font-size: 0.9rem;
                font-weight: bold;
                cursor: pointer;
            }
            button{
                display: flex;
                align-content: center;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                width: 25px;
                height: 25px;
                font-weight: bold;
                text-align: center;
            }
        }
        .infos{
            margin-top: 20px;
            display: flex;
            align-content: center;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            p{
                margin-bottom: 0 !important;
                font-weight: 450;
                font-size: 0.8rem;
            }
        }
    }
`;