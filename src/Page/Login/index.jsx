import React, { useEffect } from 'react';
import {
  LoginBackground,
  StyledBackground,
  StyledFormCard,
  StyledInput,
  StyledSubmit,
} from '../SendResetPassEmail/style';
import SendResetPassEmail from '../SendResetPassEmail';
import Logo from '../../Assets/images/Title.svg';
import { LOGIN_MUTATION } from '../../Graphql/Mutations/index';
import { Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { BootstrapCarousel } from '../../Components/Carousel/Carousel';
import { useData } from '../../Context/dataContext';
import { LabLogo, PinkCard, LabLogoDiv,LoginText,
   LoginDescription,ForgotPass, SubmitDiv, LastLine, SendEmailModal, SendEmailForm } from './style';

export default function Login() {
  const { user, handleLogin } = useData()
  const navigate = useNavigate();
  let [Login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const arrayString = ["Encontre seus velhos amigos!",
  "A mais nostálgica rede social da década está de volta",
  " Tudo para que você possa se conectar com os seus amigos"]


  useEffect(() => {
    if (user.token) {
      localStorage.setItem('Token', user.token);
    }
  }, [user.token])


  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('Formato de email inválido')
          .required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
      }),
      onSubmit: async ({ email, password }) => {
          const response = await Login({
            variables: {
              email: email,
              password: password,
            },
          });
          const { data } = response;
          const { token, user } = data.login;
          user.token = token
          handleLogin(user)
      },
    });

  if (loading)
    return (
      <StyledBackground>
        <StyledFormCard>
          <Col md={6}>
            <img src={Logo} alt="DEVinOrkut" width="150" />
          </Col>
          <h3>Verificando</h3>
        </StyledFormCard>
      </StyledBackground>
    );
  if (data)
    return (
      localStorage.setItem('Token', data.login.token),
      setTimeout(() => {
        navigate('/');
      }, 2000),
      (
        <StyledBackground>
          <StyledFormCard>
            <Col md={6}>
              <img src={Logo} alt="DEVinOrkut" width="150" />
            </Col>
            <h3>Bem vindo de volta</h3>
            <h4>{data.login.user.fullName}</h4>
          </StyledFormCard>
        </StyledBackground>

      )
    );

  return (
    
    <StyledBackground>
    <LoginBackground>
        <LoginText>Login</LoginText>
        <LoginDescription>Bem-Vindo ao Orkut, por favor forneça suas credenciais nos campos abaixo para ter acesso a rede social.</LoginDescription>
    <StyledFormCard onSubmit={handleSubmit}>
  
        <div>
        {error ? (
          <p style={{ color: 'yellow', fontWeight: 'bold', textAlign: 'center' }}>
            {error.message}
          </p> 
          ) : null}
          <label htmlFor="email">E-mail</label>
          <StyledInput
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            name="email"
            placeholder="Digite seu email"
            type="text"
          />
          {touched.email && errors.email ? <p>{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <StyledInput
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            name="password"
            placeholder="Digite sua senha"
            type="password"
          />
          {touched.password && errors.password ? (
            <p>{errors.password}</p>
          ) : null}
        </div>
          <ForgotPass>esqueceu sua senha?</ForgotPass>
       <SubmitDiv><span>  <input type="radio" name="remember" id="remeber" value="Lembre de mim"/><label htmlFor="remember">Lembre de mim</label></span> <StyledSubmit value="Entrar" type={'submit'} /></SubmitDiv>
        
      </StyledFormCard>
          <LastLine> <p>Não possui uma conta?   </p> <ForgotPass> Criar conta</ForgotPass> </LastLine>
      
    </LoginBackground>
     <PinkCard>
      <LabLogoDiv> <LabLogo></LabLogo></LabLogoDiv>
     
          <img src={Logo} alt="DEVinOrkut" width="350" style={{marginBottom:"22%"}} />
       
     <BootstrapCarousel
      arrayString={ arrayString}/>
     </PinkCard>
    </StyledBackground>
    
  );
}




