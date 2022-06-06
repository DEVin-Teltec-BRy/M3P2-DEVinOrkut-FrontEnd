import React from 'react';
import { InputStyled, TextAreaStyled } from './style';

const Input = (props) => {
  const element =
    props.element === 'input' ? (
      <InputStyled
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        style={props.style}
        size={props.size}
      />
    ) : (
      <TextAreaStyled
        id={props.id}
        row={props.row || 100}
        cols={props.cols || 60}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
      />
    );

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
