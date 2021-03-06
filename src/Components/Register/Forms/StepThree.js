import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formStep, formRegister } from "../../../Store/rootSlice";
import { validateStepThree } from "../../../Utils/validateForm";

import CustomButton from "../../UI/CustomButton";
import { ButtonGroup } from "../../UI/CustomButton/style";
import {
  FormatStyles,
  InputStyled,
  TextAreaErrorContainer,
  TextAreaStyled,
} from "../../UI/Input/style";
import ProgressSteps from "../../UI/ProgressSteps";
import {
  Label,
  ErrorForm,
  FlexContainer,
  HumorSpan,
  RelationshipSpan,
  LabLogoDiv,
  LabLogo,
} from "../style";

const StepThree = ({ previousButton, submitButtonText }) => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.FormUserRegister);

  const currentStep = useSelector((state) => state.FormStep);
  const userRelationship = useSelector(
    (state) => state.FormUserRegister.relationship
  );
  const userHumor = useSelector((state) => state.FormUserRegister.humor);
  const userInterests = useSelector(
    (state) => state.FormUserRegister.interests
  );
  const userAboutMe = useSelector((state) => state.FormUserRegister.aboutMe);

  const [formData, setFormData] = useState({
    relationship: userRelationship || "",
    humor: userHumor || "",
    interests: userInterests || "",
    aboutMe: userAboutMe || "",
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

    setError(validateStepThree(formData));
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      relationship: "",
      humor: "",
      interests: "",
      aboutMe: "",
    });
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitted) {
      dispatch(
        formRegister({
          ...currentState,
          relationship: formData.relationship,
          humor: formData.humor,
          interests: formData.interests,
          aboutMe: formData.aboutMe,
        })
      );
      dispatch(formStep(4));
    }
  }, [formData, isSubmitted, currentState, dispatch, error]);

  return (
    <>
      <ProgressSteps
        activeOne={true}
        activeTwo={true}
        activeThree={true}
        style={{ width: "66%" }}
      />
      <form name="stepFormThree" id="stepFormThree" onSubmit={handleSubmit}>
        <FormatStyles>
          <FlexContainer>
            <RelationshipSpan>
              <Label htmlFor="genero">Relacionamento</Label>
              <select
                className="form-select"
                value={formData.relationship}
                onChange={handleChange}
                name="relationship"
                id="relationship"
              >
                <option default value="single">
                  Solteiro(a)
                </option>
                <option value="casado">Casado(a)</option>
                <option value="dating">Namorando</option>
                <option value="engaged">Noivo(a)</option>
                <option value="stable-union">Em uma uni??o est??vel</option>
                <option value="living-together">Morando junto</option>
                <option value="open- relationship">
                  Em um relacionamento aberto
                </option>
                <option value="complicated- relationship">
                  Em um relacionamento complicado
                </option>
                <option value="separated">Separado(a)</option>
                <option value="divorced">Divorciado(a)</option>
                <option value="widow">Vi??vo(a)</option>
              </select>
            </RelationshipSpan>
            <HumorSpan>
              <Label htmlFor="humor">Humor</Label>
              <select
                className="form-select"
                value={formData.humor}
                onChange={handleChange}
                name="humor"
                id="humor"
              >
                <option default value="happy">
                  Feliz
                </option>
                <option value="sad">Triste</option>
                <option value="angry">Com raiva</option>
                <option value="laughing-for-nothing">Rindo a toa</option>
              </select>
              {error && <ErrorForm>{error.humor}</ErrorForm>}
            </HumorSpan>
          </FlexContainer>
          <div>
            <Label htmlFor="interests">Interesses no DEVinOrkut</Label>
            <InputStyled
              id="interests"
              name="interests"
              type="text"
              value={formData.interests}
              onChange={handleChange}
            />
            {error && <ErrorForm>{error.interests}</ErrorForm>}
          </div>

          <div>
            <Label htmlFor="aboutMe">Quem sou eu</Label>
            <TextAreaStyled
              id="aboutMe"
              name="aboutMe"
              type="text"
              value={formData.aboutMe}
              onChange={handleChange}
            />
            {error && (
              <TextAreaErrorContainer>{error.aboutMe}</TextAreaErrorContainer>
            )}
          </div>

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

export default StepThree;
