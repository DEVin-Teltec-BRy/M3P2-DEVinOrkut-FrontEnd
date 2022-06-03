import React from 'react';
import ProgressSteps from '../../UI/ProgressSteps';
import { stepOneData } from './inputData';
import InputForm from './InputForm';

const StepOne = () => {
  return (
    <>
      <ProgressSteps activeOne={true} />

      {stepOneData.map((data) => (
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

export default StepOne;
