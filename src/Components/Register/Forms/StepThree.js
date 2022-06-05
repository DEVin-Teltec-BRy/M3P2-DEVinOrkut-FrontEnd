import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formStep, formRegister } from '../../../Store/rootSlice';
import { validateStepThree } from '../../../Utils/validateForm';

import CustomButton from '../../UI/CustomButton';
import { ButtonGroup } from '../../UI/CustomButton/style';
import { InputStyled } from '../../UI/Input/style';
import ProgressSteps from '../../UI/ProgressSteps';
import { Label } from '../style';

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
    relationship: userRelationship || '',
    humor: userHumor || '',
    interests: userInterests || '',
    aboutMe: userAboutMe || '',
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
        style={{ width: '66%' }}
      />
      <form name="stepFormThree" id="stepFormThree" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="relationship">Relacionamento</Label>
          <InputStyled
            id="relationship"
            name="relationship"
            type="text"
            value={formData.relationship}
            onChange={handleChange}
          />
          {error && <span>{error.relationship}</span>}
        </div>

        <div>
          <Label htmlFor="humor">Humor</Label>
          <InputStyled
            id="humor"
            name="humor"
            type="text"
            value={formData.humor}
            onChange={handleChange}
          />
          {error && <span>{error.humor}</span>}
        </div>

        <div>
          <Label htmlFor="interests">Interesses</Label>
          <InputStyled
            id="interests"
            name="interests"
            type="text"
            value={formData.interests}
            onChange={handleChange}
          />

          {error && <span>{error.interests}</span>}
        </div>

        <div>
          <Label htmlFor="aboutMe">Sobre mim</Label>
          <InputStyled
            id="aboutMe"
            name="aboutMe"
            type="text"
            value={formData.aboutMe}
            onChange={handleChange}
          />

          {error && <span>{error.aboutMe}</span>}
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

export default StepThree;
