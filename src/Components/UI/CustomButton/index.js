import React from 'react';
import { ButtonStyled } from './style';

const CustomButton = ({
  children,
  className,
  style,
  onClick,
  type,
  primary,
}) => {
  return (
    <ButtonStyled
      className={`${className}`}
      style={style}
      onClick={onClick}
      type={type}
      primary={primary}
    >
      {children}
    </ButtonStyled>
  );
};

export default CustomButton;
