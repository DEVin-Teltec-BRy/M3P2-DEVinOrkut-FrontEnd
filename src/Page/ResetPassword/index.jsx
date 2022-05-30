import React from 'react'
import {StyledBackground, StyledFormCard, StyledInput} from './style'
import Logo from '../../Assets/images/Title.svg'
import { SEND_EMAIL } from '../../Graphql/Mutations'
import { Col } from 'react-bootstrap'
import { useMutation } from '@apollo/client'
export default function ResetPassword() {
 const [SendEmail,{data,loading, erro}] = useMutation(SEND_EMAIL)

  if(loading) return <h1>Loading</h1>
  if(data) return <h1>{data.login.token}</h1>
  if(erro) return <h1>{erro}</h1>

  
  return (
    <StyledBackground>
        <StyledFormCard onSubmit={e=>{
          e.preventDefault()
          SendEmail({variables:{user:"vitor@pedra.com"}})

        }}>
        <Col md={6}>
        <img src={Logo} alt="DEVinOrkut" width="150" />
      </Col>
      <h3>Troca de senha</h3>
     <div>
     <label htmlFor="email">Email</label>
        <StyledInput name='email' placeholder='Digite seu email' type={'password'}></StyledInput>
     </div>
        <StyledInput value="Enviar" type={'submit'}/>
        </StyledFormCard>
    </StyledBackground>
  ) 
}
