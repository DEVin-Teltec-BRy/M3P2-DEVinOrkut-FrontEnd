import React from 'react'
import {StyledBackground, StyledFormCard, StyledInput} from './style'
import Logo from '../../Assets/images/Title.svg'
import { SEND_EMAIL } from '../../Graphql/Mutations'
import { Col } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { useMutation } from '@apollo/client'
export default function SendResetPassEmail() {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
        email: ''
    },
    validationSchema: Yup.object({

        email: Yup.string().email("Formato de email inválido").required("Email é obrigatório"),
       
    }),
    onSubmit: async ({ email}) => {
      SendEmail({variables:{user:{email:email}}})
    }
})


 const [SendEmail,{data,loading, erro}] = useMutation(SEND_EMAIL)
console.log(data)
  if(loading) return <h1>Loading</h1>
  if(data) return (
    <StyledBackground>
      <StyledFormCard>
      <Col md={6}>
        <img src={Logo} alt="DEVinOrkut" width="150" />
      </Col>
        <h3>{data.sendEmailresetPassword}</h3>
      </StyledFormCard>
    </StyledBackground>
  )
  if (erro) return <h1>{erro}</h1>
  
  return (
    <StyledBackground>
        <StyledFormCard onSubmit={handleSubmit}>
        <Col md={6}>
        <img src={Logo} alt="DEVinOrkut" width="150" />
      </Col>
      <h3>Troca de senha</h3>
     <div>
     <label htmlFor="email">Email</label>
     <StyledInput onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" placeholder='Email' type="text"  />
            {touched.email && errors.email ? (<p>{errors.email}</p>) : null}
     </div>
        <StyledInput value="Enviar" type={'submit'}/>
        </StyledFormCard>
    </StyledBackground>
  ) 
}
