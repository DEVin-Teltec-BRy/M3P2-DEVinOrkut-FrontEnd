import * as S from "./style";

const Navlink = ({ link, icon, name }) => {
  return (
    <S.Navlink href={link}>
      <span>{icon}</span>
      {name}
    </S.Navlink>
  );
};

export default Navlink;
