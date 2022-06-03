import React from 'react';

import { stepTwoData } from './inputData';
import InputForm from './InputForm';

const StepTwo = () => {
  return (
    <>
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
