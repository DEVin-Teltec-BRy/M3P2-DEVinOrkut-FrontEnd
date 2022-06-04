import React from 'react';
import ProgressSteps from '../../UI/ProgressSteps';

import { stepTwoData } from './inputData';
import InputForm from './InputForm';

const StepTwo = () => {
  return (
    <>
      <ProgressSteps
        activeOne={true}
        activeTwo={true}
        style={{ width: '33%' }}
      />
      {stepTwoData.map((data) => (
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

export default StepTwo;
