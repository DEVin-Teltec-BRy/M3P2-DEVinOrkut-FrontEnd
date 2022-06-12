import React from "react";
import {
  LoginBackground,
  StyledBackground,
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
import { LabLogo, PinkCard,LabLogoDiv } from "../Login/style";
import { BootstrapCarousel } from "../../Components/Carousel/Carousel";


function ResetPassword() {
  const [ChangePassword, { data, loading }] = useMutation(RESET_PASS);
  const match = useParams();
  const token = match.token;
  const arrayString = [
    "Encontre seus velhos amigos!",
    "A mais nostálgica rede social da década está de volta",
    " Tudo para que você possa se conectar com os seus amigos",
  ];
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
      <LoginBackground>
      <StyledFormCard onSubmit={handleSubmit}>
       
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
          {touched.newPass && errors.newPass ? <p style={{fontSize:12, color:'red'}}>{errors.newPass}</p> : null}
        </div>
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
            <p style={{fontSize:12, color:'red'}}>{errors.confirmPass}</p>
          ) : null}
        </div>
        <StyledInput value="Enviar" type={"submit"} />
        
      </StyledFormCard>
      </LoginBackground>
      <PinkCard>
      <LabLogoDiv>
          {" "}
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

export default ResetPassword;