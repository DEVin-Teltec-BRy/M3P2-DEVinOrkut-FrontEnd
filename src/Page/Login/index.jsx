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
  ContentModal,
  StyledInputLogin,
  LoginHeader,
  CreateAccountStyle,
  ModalForm,
} from "./style";
import { NewInputForm } from "../../Components/Input";
import { NewButton } from "../../Components/Button";
import { Loading } from "../../Components/Loading";
import { MainModal } from "../../Components/MainModal";
import { BiError } from "react-icons/bi";

function Login() {
  const { handleLogin } = useData();
  const navigate = useNavigate();
  const [modal, setModal] = useState("none");
  const [show, setShow] = useState(true);
  let [Login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const CarouselMessage = [
    {
      title: "Encontre seus velhos amigos!",
      text: "A mais nostálgica rede social da década está de volta. Tudo para que você possa se conectar com os seus velhos amigos, além de fazer novas amizades.",
    },
    {
      title: "A mais nostálgica rede social da década está de volta",
      text: "Todos os entretenimentos mais utilizados pelos usuários do orkut estão de volta",
    },
    {
      title: " Tudo para que você possa se conectar com os seus amigos",
      text: "Temos os melhores grupos ja criados na história da internet, se divirta!",
    },
  ];

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
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
      try {
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
      } catch (error) {
        handleOpen();
      }
    },
  });

  if (loading) return <Loading />;
  if (data) {
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
  }

  return (
    <>
      <StyledBackground>
        <LoginBackground>
          <LoginHeader>
            <h1>Login</h1>
            <p>
              Bem-Vindo ao Orkut, por favor forneça suas credenciais nos campos
              abaixo para ter acesso a rede social.
            </p>
          </LoginHeader>
          <StyledFormCard onSubmit={handleSubmit}>
            <StyledInputLogin>
              <NewInputForm
                name="email"
                label="E-Mail"
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
                Esqueceu a senha?
              </ForgotPass>
              <hr></hr>
            </StyledInputLogin>
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
          </StyledFormCard>
          <LastLine>
            <span>Não possui uma conta? </span>{" "}
            <CreateAccountStyle onClick={() => navigate("/register")}>
              {" "}
              Criar conta
            </CreateAccountStyle>{" "}
          </LastLine>
          <SendEmailModal style={{ display: modal }}>
            <ModalStripe>
              <ModalForm>
                <h2>Resetar senha</h2>
                <p>
                  Digite um e-mail válido associado a sua conta e nós iremos
                  enviar um e-mail com instruções de como resetar a sua senha
                </p>
                <SendResetPassEmail />
                <StyledLeave
                  onClick={() => {
                    setModal("none");
                  }}
                >
                  Sair
                </StyledLeave>
              </ModalForm>
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

          <BootstrapCarousel CarouselMessage={CarouselMessage} />
        </PinkCard>
      </StyledBackground>
      {error?.message && (
        <MainModal
          title="Error de autenticação "
          show={show}
          close={handleClose}
        >
          <ContentModal>
            <BiError size={65} /> <br />
            {error?.message}
          </ContentModal>
        </MainModal>
      )}
    </>
  );
}

export default Login;
