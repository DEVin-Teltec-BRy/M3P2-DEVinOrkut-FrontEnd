import { FaUserCircle } from "react-icons/fa";
import { AiOutlineCamera,AiOutlineInbox } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { NewButtonLink } from "../Button";
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

      <S.MenuOptions>
        <NewButtonLink link="#perfil" icon={<FaUserCircle />} name="Perfil" />
        <NewButtonLink
          to="/"
          icon={<AiOutlineCamera />}
          name="Fotos"
        />
        <NewButtonLink
          to="/"
          icon={<BsChatLeft />}
          name="Recados"
        />
        <NewButtonLink
          to="/"
          icon={<AiOutlineInbox />}
          name="Depoimentos"
        />
      </S.MenuOptions>


      <div className="edit-profile">
        {/* eslint-disable-next-line */}
        <a href="#">Editar Perfil</a>
      </div>
    </S.ProfileContainer>
  );
};

export default Profile;
