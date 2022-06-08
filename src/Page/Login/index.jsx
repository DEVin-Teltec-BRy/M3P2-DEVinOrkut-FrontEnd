import React, { useState } from "react";
import {
  LoginBackground,
  StyledBackground,
  StyledFormCard,
  StyledLeave,
} from "../SendResetPassEmail/style";
import SendResetPassEmail from "../SendResetPassEmail";
import Logo from "../../Assets/images/Title.svg";
import { LOGIN_MUTATION } from "../../Graphql/Mutations/index";
import { Col, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { BootstrapCarousel } from "../../Components/Carousel/Carousel";
import { useData } from "../../Context/dataContext";
import {
  LabLogo,
  PinkCard,
  LabLogoDiv,
  LoginText,
  LoginDescription,
  ForgotPass,
  SubmitDiv,
  LastLine,
  SendEmailModal,
  ModalStripe,
  AlignLogin,
} from "./style";
import { NewInputForm } from "../../Components/Input";
import { NewButton } from "../../Components/Button";
import { Loading } from "../../Components/Loading";

export default function Login() {
  const {  handleLogin } = useData();
  const navigate = useNavigate();
  const [modal, setModal] = useState("none");
  let [Login, { data, loading }] = useMutation(LOGIN_MUTATION);

  const arrayString = [
    "Encontre seus velhos amigos!",
    "A mais nostálgica rede social da década está de volta",
    " Tudo para que você possa se conectar com os seus amigos",
  ];


  const { handleSubmit, handleChange, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Formato de email inválido")
          .required("Email é obrigatório"),
        password: Yup.string().required("Senha é obrigatória"),
      }),
      onSubmit: async (values) => {
        const response = await Login({
          variables: {
            email: values.email,
            password: values.password,
          },
        });
        const { data } = response;
        const { token, user } = data.login;
        user.token = token;
        handleLogin(user);
      },
    });

  if (loading)
    return (
      <Loading/>
    );
  if (data)
    return (
      localStorage.setItem("Token", data.login.token),
      setTimeout(() => {
        navigate("/");
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
        <LoginDescription>
          Bem-Vindo ao Orkut, por favor forneça suas credenciais nos campos
          abaixo para ter acesso a rede social.
        </LoginDescription>
        <StyledFormCard onSubmit={handleSubmit}>
          <NewInputForm
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            isValid={touched.email && !errors.email}
            error={errors.email}
          />
          <NewInputForm
            name="password"
            label="Senha"
            type="password"
            onChange={handleChange}
            value={values.password}
            isValid={touched.password && !errors.password}
            error={errors.password}
          />
          <ForgotPass
            onClick={() => {
              setModal("flex");
            }}
          >
            esqueceu sua senha?
          </ForgotPass>
          <SubmitDiv>
            <AlignLogin>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Lembre de mim"
              />
              <NewButton type="submit" size="sm">
                Entrar
              </NewButton>
            </AlignLogin>
          </SubmitDiv>
        </StyledFormCard>
        <LastLine>
          {" "}
          <p>Não possui uma conta? </p> <ForgotPass onClick={()=> navigate("/register")}> Criar conta</ForgotPass>{" "}
        </LastLine>
        <SendEmailModal style={{ display: modal }}>
          <ModalStripe>
            <h2>Resetar senha</h2>
            <p>
              Digite um e-mail válido associado a sua conta e nós iremos enviar
              um e-mail com instruções de como resetar a sua senha
            </p>
            <SendResetPassEmail />
            <StyledLeave
              onClick={() => {
                setModal("none");
              }}
            >
              Sair
            </StyledLeave>
          </ModalStripe>
        </SendEmailModal>
      </LoginBackground>
      <PinkCard>
        <LabLogoDiv>
          <LabLogo></LabLogo>
        </LabLogoDiv>

        <img
          src={Logo}
          alt="DEVinOrkut"
          width="350"
          style={{ marginBottom: "22%" }}
        />

        <BootstrapCarousel arrayString={arrayString} />
      </PinkCard>
    </StyledBackground>
  );
}
