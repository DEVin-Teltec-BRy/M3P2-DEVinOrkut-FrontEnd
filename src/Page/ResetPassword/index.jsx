import React from "react";
import {
  StyledBackground,
  StyledErrorMessage,
  StyledFormCard,
  StyledInput,
} from "../SendResetPassEmail/style";
import Logo from "../../Assets/images/Title.svg";
import { RESET_PASS } from "../../Graphql/Mutations";
import { Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  const [ChangePassword, { data, loading }] = useMutation(RESET_PASS);
  const match = useParams();
  const token = match.token;
  
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        newPass: "",
        confirmPass: "",
      },
      validationSchema: Yup.object({
        newPass: Yup.string()
          .min(8, "Mínimo 8 caracteres")
          .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'Senha deve ter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial')
          .required("Nova senha é obrigatório"),
        confirmPass: Yup.string()
          .min(8, "Mínimo 8 caracteres.")
          .required("Confirmação é obrigatória")
          .oneOf([Yup.ref('newPass'),null],"Os campos devem ser iguais"),
      }),
      onSubmit: async ({ newPass, confirmPass }) => {
        ChangePassword({
          variables: {
            user: {
              token: token,
              newPassword: newPass,
              confirmPassword: confirmPass,
            },
          },
        });
      },
    });

  if (loading) return <h1>Loading</h1>;
  
  if (data)
    if(Object.hasOwn(data,'changePassword'))
    return (
      
      <StyledBackground>
        <StyledFormCard>
          <Col md={6}>
            <img src={Logo} alt="DEVinOrkut" width="150" />
          </Col>
          <h4>{data.changePassword}</h4>
        </StyledFormCard>
      </StyledBackground>
    );

  return (
    <StyledBackground>
      <StyledFormCard onSubmit={handleSubmit}>
        <Col md={6}>
          <img src={Logo} alt="DEVinOrkut" width="150" />
        </Col>
        <h3>Troca de senha</h3>
        <div>
          <label htmlFor="email">Nova senha</label>
          <StyledInput
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.newPass}
            name="newPass"
            placeholder="Nova senha"
            type="password"
          />
        </div>
          {touched.newPass && errors.newPass ? <StyledErrorMessage>{errors.newPass}</StyledErrorMessage> : null}
        <div>
          <label htmlFor="email">Confirmar senha</label>
          <StyledInput
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.confirmPass}
            name="confirmPass"
            placeholder="Confirmar senha"
            type="password"
          />
          {touched.confirmPass && errors.confirmPass ? (
            <StyledErrorMessage>{errors.confirmPass}</StyledErrorMessage>
          ) : null}
        </div>
        <StyledInput value="Enviar" type={"submit"} />
      </StyledFormCard>
    </StyledBackground>
  );
}
