import { Button } from 'react-bootstrap';
import * as S from './style';

export const NewButtonLink = ({ to, icon, name }) => {
  return (
    <S.Navlink to={`${to}`}>
      <span>{icon}</span>
      {name}
    </S.Navlink>
  );
};

export const NewButton = ({ children, bg, size, type }) => (
  <Button variant={bg} size={size} type={type ? type : 'button'}>
    {children}
  </Button>
);