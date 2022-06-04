import React from "react";
import { StyledInput, StyledSubmitInput } from "./style";
import { SEND_EMAIL } from "../../Graphql/Mutations";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { SendEmailForm } from "../Login/style";
import { NewInputForm } from "../../Components/Input";
export default function SendResetPassEmail() {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Formato de email inválido")
          .required("Email é obrigatório"),
      }),
      onSubmit: async ({ email }) => {
        SendEmail({ variables: { user: { email: email } } });
      },
    });

  const [SendEmail, { data, loading, erro }] = useMutation(SEND_EMAIL);

  if (loading)
    return (
      <SendEmailForm>
        <h3>loading</h3>
      </SendEmailForm>
    );
  if (data)
    return (
      <SendEmailForm>
        <h3>{data.sendEmailresetPassword}</h3>
      </SendEmailForm>
    );
  if (erro) return <h1>{erro}</h1>;

  return (
    <SendEmailForm onSubmit={handleSubmit}>
      <NewInputForm
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        isValid={touched.email && !errors.email}
        error={errors.email}
      />
      <StyledSubmitInput value="Enviar instruções" type={"submit"} />
    </SendEmailForm>
  );
}
