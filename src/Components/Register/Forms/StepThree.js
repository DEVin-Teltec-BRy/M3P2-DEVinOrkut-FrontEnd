import React from 'react';

import { stepThreeData } from './inputData';
import InputForm from './InputForm';

const StepThree = () => {
  return (
    <>
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
