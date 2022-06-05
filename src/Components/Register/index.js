import React from 'react';
import { useSelector } from 'react-redux';
import Final from './Forms/Final';
import StepFour from './Forms/StepFour';
import StepOne from './Forms/StepOne';
import StepThree from './Forms/StepThree';
import StepTwo from './Forms/StepTwo';
import Layout from './Layout';

const Register = () => {
  const pageStep = useSelector((state) => state.FormStep);

  return (
    <Layout>
      {pageStep === 1 && (
        <StepOne previousButton={false} submitButtonText={'Próximo'} />
      )}
      {pageStep === 2 && (
        <StepTwo previousButton={true} submitButtonText={'Próximo'} />
      )}
      {pageStep === 3 && (
        <StepThree previousButton={true} submitButtonText={'Próximo'} />
      )}
      {pageStep === 4 && (
        <StepFour previousButton={true} submitButtonText={'Enviar'} />
      )}
      {pageStep === 5 && <Final />}
    </Layout>
  );
};

export default Register;
