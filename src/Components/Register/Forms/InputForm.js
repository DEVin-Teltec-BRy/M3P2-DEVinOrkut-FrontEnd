import React from 'react';
import Input from '../../UI/Input';
import { Label } from '../style';

const InputForm = ({ children, htmlFor, element, id, type, value }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>{children}</Label>
      <Input element={element} id={id} type={type} value={value} />
    </>
  );
};

export default InputForm;
