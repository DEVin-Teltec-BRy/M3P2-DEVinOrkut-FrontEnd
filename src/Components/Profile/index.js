import { FaUserCircle, FaUserFriends, FaThLarge } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import Link from "../Button";
import * as S from "./style";

const Profile = () => {
  return (
    <S.ProfileContainer>
      <img src="/assets/images/elon-musk.webp" alt="Elon Musk" />
      <h2>Elon Musk</h2>
      <ul>
        <li>Masculino</li>
        <li>Casado(a), Pretória</li>
        <li>África do Sul</li>
      </ul>
      <Nav className="menu-links">
        <Link link="#perfil" icon={<FaUserCircle />} name="Perfil" />
        <Link link="#amigos" icon={<FaUserFriends />} name="Amigos" />
        <Link link="#comunidade" icon={<FaThLarge />} name="Comunidade" />
      </Nav>
      <div className="edit-profile">
        <a href="#">Editar Perfil</a>
      </div>
    </S.ProfileContainer>
  );
};

export default Profile;
