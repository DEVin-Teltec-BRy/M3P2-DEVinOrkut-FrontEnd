import React from 'react';

import { stepFourData } from './inputData';
import InputForm from './InputForm';

const StepFour = () => {
  return (
    <>
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
