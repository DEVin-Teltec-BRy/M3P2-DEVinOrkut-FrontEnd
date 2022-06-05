import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formStep, formRegister } from '../../../Store/rootSlice';
import { validateStepOne } from '../../../Utils/validateForm';

import CustomButton from '../../UI/CustomButton';
import { ButtonGroup } from '../../UI/CustomButton/style';
import { InputStyled } from '../../UI/Input/style';

import ProgressSteps from '../../UI/ProgressSteps';
import { Label } from '../style';

const StepOne = ({ previousButton, submitButtonText }) => {
  const dispatch = useDispatch();

  const currentStep = useSelector((state) => state.FormStep);
  const userFullName = useSelector((state) => state.FormUserRegister.fullName);
  const userCpf = useSelector((state) => state.FormUserRegister.cpf);
  const userGender = useSelector((state) => state.FormUserRegister.gender);
  const userBirthDate = useSelector(
    (state) => state.FormUserRegister.birthDate
  );

  const [formData, setFormData] = useState({
    fullName: userFullName || '',
    cpf: userCpf || '',
    gender: userGender || '',
    birthDate: userBirthDate || '',
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateStepOne(formData));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitted) {
      dispatch(
        formRegister({
          fullName: formData.fullName,
          cpf: formData.cpf,
          gender: formData.gender,
          birthDate: formData.birthDate,
        })
      );
      dispatch(formStep(2));
    }
  }, [formData, isSubmitted, dispatch, error]);

  return (
    <>
      <ProgressSteps activeOne={true} />
      <form name="formStepOne" id="formStepOne" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="fullName">Nome Completo</Label>
          <InputStyled
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
          />
          {error && <span>{error.fullName}</span>}
        </div>

        <div>
          <Label htmlFor="cpf">CPF</Label>
          <InputStyled
            element="input"
            id="cpf"
            name="cpf"
            type="text"
            defaultValue={formData.cpf}
            onChange={handleChange}
          />
          {error && <span>{error.cpf}</span>}
        </div>

        <div>
          <Label htmlFor="cpf">Gender</Label>
          <InputStyled
            element="input"
            id="gender"
            name="gender"
            type="text"
            value={formData.gender}
            onChange={handleChange}
          />
          {error && <span>{error.gender}</span>}
        </div>

        <div>
          <Label htmlFor="birthDate">Data de Aniversário</Label>
          <InputStyled
            element="input"
            id="birthDate"
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {error && <span>{error.birthDate}</span>}
        </div>

        <ButtonGroup>
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

export default StepOne;
