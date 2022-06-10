import * as S from './style';

export const NewButtonLink = ({ to, icon, name, friends, communities }) => {
  return (
    <S.Navlink to={`${to}`} state={{friends, communities}}>
      <span>{icon}</span>
      {name}
    </S.Navlink>
  );
};

export const NewButton = ({ children, bg, size, type,onClick }) => (
  <S.MainButton variant={bg} size={size} type={type ? type : 'button'} onClick={onClick}>
    {children}
  </S.MainButton>
);
