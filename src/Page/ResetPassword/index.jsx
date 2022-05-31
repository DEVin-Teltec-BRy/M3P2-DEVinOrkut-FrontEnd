import React from "react";
import {
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

export default function ResetPassword() {
    const [ChangePassword, { data, loading, erro }] = useMutation(RESET_PASS);
    const match = useParams()
    const token = match.token
   
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        newPass: "",
        confirmPass: "",
      },
      validationSchema: Yup.object({
        newPass: Yup.string()
          .min(8,"Mínimo 8 caracteres")
          .required("Nova senha é obrigatório"),
        confirmPass: Yup.string()
          .min(8, "Mínimo 8 caracteres.")
          .required("Confirmação é obrigatória"),
      }),
      onSubmit: async ({ newPass, confirmPass }) => {
      
          ChangePassword({variables:{user:{
            token:token,  
            newPassword:newPass,
            confirmPassword:confirmPass
        }
    }
})
        
      },
    });

 
  
  if (loading) return <h1>Loading</h1>;
  if (data)
    return (
      <StyledBackground>
        <StyledFormCard>
          <Col md={6}>
            <img src={Logo} alt="DEVinOrkut" width="150" />
          </Col>
          <h3>{data.changePassword}</h3>
        </StyledFormCard>
      </StyledBackground>
    );
  if (erro) return <h1>{erro}</h1>;
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
          {touched.newPass && errors.newPass ? <p>{errors.newPass}</p> : null}
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
            <p>{errors.confirmPass}</p>
          ) : null}
        </div>
        <StyledInput value="Enviar" type={"submit"} />
      </StyledFormCard>
    </StyledBackground>
  );
}
