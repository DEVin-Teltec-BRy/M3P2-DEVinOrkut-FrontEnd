import React from 'react';
import CustomButton from '../UI/CustomButton';
import { ButtonGroup } from '../UI/CustomButton/style';

import StepFour from './Forms/StepFour';
import StepOne from './Forms/StepOne';
import StepThree from './Forms/StepThree';
import StepTwo from './Forms/StepTwo';
import Layout from './Layout';

const Register = () => {
  const [step, setStep] = React.useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputData = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <form onSubmit={handleInputData}>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        {step === 4 && <StepFour />}

        <ButtonGroup>
          {!(step === 1) && (
            <CustomButton primary={false} type="submit" onClick={prevStep}>
              Anterior
            </CustomButton>
          )}
          <CustomButton
            primary={true}
            type="submit"
            onClick={step === 4 ? null : nextStep}
          >
            {step === 4 ? 'Enviar' : 'Próximo'}
          </CustomButton>
        </ButtonGroup>
      </form>
    </Layout>
  );
};

export default Register;
