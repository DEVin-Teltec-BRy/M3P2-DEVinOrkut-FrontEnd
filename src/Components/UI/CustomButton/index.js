import React from 'react';
import { ButtonStyled } from './style';

const CustomButton = ({
  children,
  className,
  style,
  onClick,
  type,
  primary,
  disabled,
}) => {
  return (
    <ButtonStyled
      className={`${className}`}
      style={style}
      onClick={onClick}
      type={type}
      primary={primary}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};

export default CustomButton;
