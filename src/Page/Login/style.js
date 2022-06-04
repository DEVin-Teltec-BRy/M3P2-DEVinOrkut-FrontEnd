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
