import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formStep, formRegister } from "../../../Store/rootSlice";
import { validateStepFour } from "../../../Utils/validateForm";

import CustomButton from "../../UI/CustomButton";
import { ButtonGroup } from "../../UI/CustomButton/style";
import {
  EmailSpan,
  FormatStyles,
  InputStyled,
  PasswordAndConfirmSpan,
  PasswordSpan,
} from "../../UI/Input/style";
import ProgressSteps from "../../UI/ProgressSteps";
import { Label, ErrorForm, LabLogoDiv, LabLogo } from "../style";

const StepFour = ({ previousButton, submitButtonText }) => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.FormUserRegister);

  const currentStep = useSelector((state) => state.FormStep);
  const userPassword = useSelector((state) => state.FormUserRegister.password);
  const userConfirmPassword = useSelector(
    (state) => state.FormUserRegister.confirmPassword
  );
  const userEmail = useSelector((state) => state.FormUserRegister.email);

  const [formData, setFormData] = useState({
    password: userPassword || "",
    confirmPassword: userConfirmPassword || "",
    email: userEmail || "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateStepFour(formData));
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      password: "",
      confirmPassword: "",
      email: "",
    });
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitted) {
      dispatch(
        formRegister({
          ...currentState,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          email: formData.email,
        })
      );

      dispatch(formStep(5));
    }
  }, [formData, isSubmitted, currentState, dispatch, error]);

  return (
    <>
      <ProgressSteps
        activeOne={true}
        activeTwo={true}
        activeThree={true}
        activeFour={true}
        style={{ width: "99%" }}
      />
      <form name="stepFormFour" id="stepFormFour" onSubmit={handleSubmit}>
        <FormatStyles>
          <PasswordAndConfirmSpan>
            <PasswordSpan>
              <Label htmlFor="password">Senha</Label>
              <InputStyled
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              {error.password && <ErrorForm>{error.password}</ErrorForm>}
            </PasswordSpan>

            <div>
              <Label htmlFor="confirmPassword">Confirmação de Senha</Label>
              <InputStyled
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {error.confirmPassword && (
                <ErrorForm>{error.confirmPassword}</ErrorForm>
              )}
            </div>
          </PasswordAndConfirmSpan>

          <EmailSpan>
            <Label htmlFor="email">E-Mail</Label>
            <InputStyled
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <ErrorForm>{error.email}</ErrorForm>}
          </EmailSpan>
          <ButtonGroup>
            <CustomButton
              type="button"
              primary={false}
              onClick={handleResetForm}
            >
              Limpar
            </CustomButton>
            {previousButton && (
              <CustomButton
                primary={false}
                type="submit"
                onClick={() => dispatch(formStep(currentStep - 1))}
              >
                Anterior
              </CustomButton>
            )}

            <CustomButton primary={true} type="submit">
              {submitButtonText}
            </CustomButton>
          </ButtonGroup>
        </FormatStyles>
      </form>
      <LabLogoDiv>
        <LabLogo></LabLogo>
      </LabLogoDiv>
    </>
  );
};

export default StepFour;
