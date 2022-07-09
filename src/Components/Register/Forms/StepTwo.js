import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formRegister, formStep } from "../../../Store/rootSlice";
import { validateStepTwo } from "../../../Utils/validateForm";

import CustomButton from "../../UI/CustomButton";
import { ButtonGroup } from "../../UI/CustomButton/style";
import { FormatStyles, InputStyled } from "../../UI/Input/style";
import ProgressSteps from "../../UI/ProgressSteps";
import {
  Label,
  ErrorForm,
  CepSpan,
  CitySpan,
  StateSpan,
  AdressSpan,
  NumberSpan,
  ComplementSpan,
  DistrictSpan,
  ReferencePointSpan,
  FlexContainer,
  LabLogoDiv,
  LabLogo,
} from "../style";

const StepTwo = ({ previousButton, submitButtonText }) => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.FormUserRegister);

  const currentStep = useSelector((state) => state.FormStep);
  const userPostal = useSelector((state) => state.FormUserRegister.postal);
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
    postal: userPostal || "",
    city: userCity || "",
    state: userState || "",
    address: userAddress || "",
    number: userNumber || "",
    complement: userComplement || "",
    district: userDistrict || "",
    reference: userReference || "",
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

  const handleResetForm = () => {
    setFormData({
      postal: "",
      city: "",
      state: "",
      address: "",
      number: "",
      complement: "",
      district: "",
      reference: "",
    });
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitted) {
      dispatch(formStep(3));

      dispatch(
        formRegister({
          ...currentState,
          postal: formData.postal,
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
        style={{ width: "33%" }}
      />
      <form name="formStepTwo" id="formStepTwo" onSubmit={handleSubmit}>
        <FormatStyles>
          <FlexContainer>
            <CepSpan>
              <Label htmlFor="cep">CEP</Label>
              <InputStyled
                id="postal"
                name="postal"
                type="text"
                value={formData.postal}
                onChange={handleChange}
              />
              {error && <ErrorForm>{error.postal}</ErrorForm>}
            </CepSpan>
            <CitySpan>
              <Label htmlFor="city">Cidade</Label>
              <InputStyled
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
              {error && <ErrorForm>{error.city}</ErrorForm>}
            </CitySpan>
            <StateSpan>
              <Label htmlFor="state">Estado</Label>
              <InputStyled
                id="state"
                name="state"
                type="text"
                value={formData.state}
                onChange={handleChange}
              />
              {error && <ErrorForm>{error.state}</ErrorForm>}
            </StateSpan>
          </FlexContainer>
          <FlexContainer>
            <AdressSpan>
              <Label htmlFor="address">Logradouro</Label>
              <InputStyled
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
              />

              {error && <ErrorForm>{error.address}</ErrorForm>}
            </AdressSpan>
            <NumberSpan>
              <Label htmlFor="number">Número</Label>
              <InputStyled
                id="number"
                name="number"
                type="number"
                value={formData.number}
                onChange={handleChange}
              />

              {error && <ErrorForm>{error.number}</ErrorForm>}
            </NumberSpan>
          </FlexContainer>
          <FlexContainer>
            <ComplementSpan>
              <Label htmlFor="complement">Complemento</Label>
              <InputStyled
                id="complement"
                name="complement"
                type="text"
                value={formData.complement}
                onChange={handleChange}
              />

              {error && <ErrorForm>{error.complement}</ErrorForm>}
            </ComplementSpan>
            <DistrictSpan>
              <Label htmlFor="district">Bairro</Label>
              <InputStyled
                id="district"
                name="district"
                type="text"
                value={formData.district}
                onChange={handleChange}
              />

              {error && <ErrorForm>{error.district}</ErrorForm>}
            </DistrictSpan>
            <ReferencePointSpan>
              <Label htmlFor="reference">Ponto de Referência</Label>
              <InputStyled
                id="reference"
                name="reference"
                type="text"
                value={formData.reference}
                onChange={handleChange}
              />

              {error && <ErrorForm>{error.reference}</ErrorForm>}
            </ReferencePointSpan>
          </FlexContainer>
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

export default StepTwo;
