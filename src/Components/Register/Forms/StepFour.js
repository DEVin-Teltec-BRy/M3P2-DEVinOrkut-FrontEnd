import React from 'react';
import ProgressSteps from '../../UI/ProgressSteps';

import { stepFourData } from './inputData';
import InputForm from './InputForm';

const StepFour = () => {
  return (
    <>
      <ProgressSteps
        activeOne={true}
        activeTwo={true}
        activeThree={true}
        activeFour={true}
        style={{ width: '99%' }}
      />
      {stepFourData.map((data) => (
        <InputForm
          element={data.element}
          key={data.input}
          htmlFor={data.id}
          id={data.id}
          type={data.type}
        >
          {data.title}
        </InputForm>
      ))}
    </>
  );
};

export default StepFour;
