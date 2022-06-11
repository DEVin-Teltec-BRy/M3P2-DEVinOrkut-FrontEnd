import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formStep, formRegister } from '../../../Store/rootSlice';
import { validateStepFour } from '../../../Utils/validateForm';

import CustomButton from '../../UI/CustomButton';
import { ButtonGroup } from '../../UI/CustomButton/style';
import { InputStyled } from '../../UI/Input/style';
import ProgressSteps from '../../UI/ProgressSteps';
import { Label, ErrorForm } from '../style';

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
    password: userPassword || '',
    confirmPassword: userConfirmPassword || '',
    email: userEmail || '',
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
      password: '',
      confirmPassword: '',
      email: '',
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
        style={{ width: '99%' }}
      />
      <form name="stepFormFour" id="stepFormFour" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="password">Password</Label>
          <InputStyled
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error.password && <ErrorForm>{error.password}</ErrorForm>}
        </div>

        <div>
          <Label htmlFor="confirmPassword">Confirmar Password</Label>
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
        <div>
          <Label htmlFor="email">Email</Label>
          <InputStyled
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <ErrorForm>{error.email}</ErrorForm>}
        </div>

        <ButtonGroup>
          <CustomButton type="button" primary={false} onClick={handleResetForm}>
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
      </form>
    </>
  );
};

export default StepFour;
