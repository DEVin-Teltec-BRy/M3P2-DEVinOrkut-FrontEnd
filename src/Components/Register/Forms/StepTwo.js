import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formRegister, formStep } from '../../../Store/rootSlice';
import { validateStepTwo } from '../../../Utils/validateForm';

import CustomButton from '../../UI/CustomButton';
import { ButtonGroup } from '../../UI/CustomButton/style';
import { InputStyled } from '../../UI/Input/style';
import ProgressSteps from '../../UI/ProgressSteps';
import { Label } from '../style';

const StepTwo = ({ previousButton, submitButtonText }) => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.FormUserRegister);

  const currentStep = useSelector((state) => state.FormStep);
  const userCep = useSelector((state) => state.FormUserRegister.cep);
  const userCity = useSelector((state) => state.FormUserRegister.city);
  const userState = useSelector((state) => state.FormUserRegister.state);
  const userAddress = useSelector((state) => state.FormUserRegister.address);
  const userNumber = useSelector((state) => state.FormUserRegister.number);
  const userComplement = useSelector(
    (state) => state.FormUserRegister.complement
  );
  const userDistrict = useSelector((state) => state.FormUserRegister.district);
  const userReference = useSelector(
    (state) => state.FormUserRegister.reference
  );

  const [formData, setFormData] = useState({
    cep: userCep || '',
    city: userCity || '',
    state: userState || '',
    address: userAddress || '',
    number: userNumber || '',
    complement: userComplement || '',
    district: userDistrict || '',
    reference: userReference || '',
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
    setError(validateStepTwo(formData));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitted) {
      dispatch(formStep(3));

      dispatch(
        formRegister({
          ...currentState,
          cep: formData.cep,
          city: formData.city,
          state: formData.state,
          address: formData.address,
          number: formData.number,
          complement: formData.complement,
          district: formData.district,
          reference: formData.reference,
        })
      );
    }
  }, [formData, isSubmitted, currentState, dispatch, error]);

  return (
    <>
      <ProgressSteps
        activeOne={true}
        activeTwo={true}
        style={{ width: '33%' }}
      />
      <form name="formStepTwo" id="formStepTwo" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="cep">CEP</Label>
          <InputStyled
            id="cep"
            name="cep"
            type="text"
            value={formData.cep}
            onChange={handleChange}
          />
          {error && <span>{error.cep}</span>}
        </div>
        <div>
          <Label htmlFor="city">Cidade</Label>
          <InputStyled
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
          />
          {error && <span>{error.city}</span>}
        </div>
        <div>
          <Label htmlFor="state">Estado</Label>
          <InputStyled
            id="state"
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
          />
          {error && <span>{error.state}</span>}
        </div>
        <div>
          <Label htmlFor="address">Endereço</Label>
          <InputStyled
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
          />

          {error && <span>{error.address}</span>}
        </div>
        <div>
          <Label htmlFor="number">Número</Label>
          <InputStyled
            id="number"
            name="number"
            type="text"
            value={formData.number}
            onChange={handleChange}
          />

          {error && <span>{error.number}</span>}
        </div>
        <div>
          <Label htmlFor="complement">Complemento</Label>
          <InputStyled
            id="complement"
            name="complement"
            type="text"
            value={formData.complement}
            onChange={handleChange}
          />

          {error && <span>{error.complement}</span>}
        </div>
        <div>
          <Label htmlFor="district">Bairro</Label>
          <InputStyled
            id="district"
            name="district"
            type="text"
            value={formData.district}
            onChange={handleChange}
          />

          {error && <span>{error.district}</span>}
        </div>
        <div>
          <Label htmlFor="reference">Referência</Label>
          <InputStyled
            id="reference"
            name="reference"
            type="text"
            value={formData.reference}
            onChange={handleChange}
          />

          {error && <span>{error.reference}</span>}
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

export default StepTwo;
