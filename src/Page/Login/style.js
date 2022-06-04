import styled from 'styled-components'
import lab365 from '../../Assets/images/LAB365.png'
  
export const PinkCard = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-end;
        background:linear-gradient(180deg, rgba(224, 25, 137, 0.6) 0%, #E01989 100%);
        height:100vh;
        width:60vw;
        
`
export const LoginText = styled.h1`
    position:fixed;
    left:40px;
    top:20px;
    color:black;
`
export const LoginDescription = styled.p`
    width:35vw;
    position:fixed;
    left:40px;
    top:70px;

`
export const ForgotPass = styled.p`
color:#E01989;
align-self:flex-end;
margin-right:5vw;
text-decoration:underline;
:hover{
    transform:scale(1.05);
    cursor:pointer;
}

`

export const SubmitDiv = styled.div`
width:30vw;
    display:flex;
    justify-content:space-between;
`
export const LastLine = styled.div`
    display:flex;
    gap:20px;
    margin-top:20vh;
        align-self:flex-end;

`
export const LabLogo = styled.div`
    width:150px;
    height:25px;
    background-image:url(${lab365});
    background-position:contain;
`
export const LabLogoDiv = styled.div`
position:absolute;
right:50px;
top:50px;
background-color:white;
    display:flex;
    border-radius:8px;
    justify-content:center;
    align-items:center;
    width:170px;
    height:35px;
    padding:10px;
`

export const SendEmailModal = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    position:fixed;
    left:5vw;
    top:15vh;
    width:30vw;
    height:70vh;
    background-color:#E01989;
    border-radius:12px;
    z-index:100;
    box-shadow:0px 0px 135px 10px black;

`
export const SendEmailForm = styled.form`
padding:20px;
    width:100%;
    height:80%;
    display:flex;
    flex-direction:column;
    gap:20px;
    background-color:white;
    
`
