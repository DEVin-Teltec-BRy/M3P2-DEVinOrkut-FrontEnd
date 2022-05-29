import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { StyledBackground, StyledFormCard, StyledInput } from './style'

export default function ResetPassword() {
  const match = useParams()
  return (
    <StyledBackground>
      <StyledFormCard>
        <Navbar.Brand>
        <img
              src="assets/images/devinorkut.png"
              alt="DEVinOrkut"
              width="150"
            />
        </Navbar.Brand>
        <h3>Trocar senha</h3>
        
        <hr></hr>
        <label htmlFor="new-pass"> Nova senha</label>
        <StyledInput name='new-pass' type={'password'} placeholder="Digite uma senha..."></StyledInput>
        <label htmlFor="confirm-pass">Confirmar senha</label>
        <StyledInput name='confirm-pass' type={'password'} placeholder="Digite a mesma senha..."></StyledInput>
        <hr></hr>
        <StyledInput name='submit' type={'submit'} value="Enviar" ></StyledInput>
      </StyledFormCard>
    </StyledBackground>
  )
}
