import * as S from "./style";

const Navlink = ({ to, icon, name }) => {
  return (
    <S.Navlink to={`${to}`}>
      <span>{icon}</span>
      {name}
    </S.Navlink>
  );
};

export default Navlink;
