import React from 'react';
import ProgressSteps from '../../UI/ProgressSteps';

import { stepThreeData } from './inputData';
import InputForm from './InputForm';

const StepThree = () => {
  return (
    <>
      <ProgressSteps
        activeOne={true}
        activeTwo={true}
        activeThree={true}
        style={{ width: '66%' }}
      />
      {stepThreeData.map((data) => (
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

export default StepThree;
