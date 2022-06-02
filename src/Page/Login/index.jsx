import React from "react";
import {
  StyledBackground,
  StyledFormCard,
  StyledInput,
} from "../SendResetPassEmail/style";
import Logo from "../../Assets/images/Title.svg";
import { LOGIN } from "../../Graphql/Mutations";
import { Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  let [Login, { data, loading, error }] = useMutation(LOGIN);

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
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
      onSubmit: async ({ email, password }) => {
        try {
          await Login({
            variables: {
              email: email,
              password: password,
            },
          });
        } catch (error) {
          console.log(error);
        }
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
      <StyledFormCard onSubmit={handleSubmit}>
        <Col md={6}>
          <img src={Logo} alt="DEVinOrkut" width="150" />
        </Col>
        <h3>Fazer o Login</h3>
        <div>
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Confirmar senha</label>
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
        <StyledInput value="Enviar" type={"submit"} />
        {error ? (
          <p style={{ color: "yellow", fontWeight: "bold" }}>
            Credenciais inválidas
          </p>
        ) : null}
      </StyledFormCard>
    </StyledBackground>
  );
}
