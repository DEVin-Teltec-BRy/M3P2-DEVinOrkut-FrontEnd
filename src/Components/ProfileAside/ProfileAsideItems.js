import React from "react";
import {
  FaUserCircle,
  FaArchive,
  FaCamera,
  FaComment,
  FaRegEdit,
} from "react-icons/fa";
import { NewButtonLink } from "../Button";
import { ProfileAsideButton, MenuOptions } from "./style";
import ModalUpload from "./ModalUpload";

const ProfileAsideItems = ({
  name,
  pictureProfile,
  genre,
  relationship,
  local,
}) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <ProfileAsideButton onClick={() => setModalShow(true)}>
        <img src={pictureProfile} alt={name} />
      </ProfileAsideButton>
      <h2>{name}</h2>
      <ul>
        <li>{genre}</li>
        <li>{relationship}</li>
        <li>{local}</li>
      </ul>
      <MenuOptions>
        <NewButtonLink to="/" icon={<FaUserCircle />} name="Perfil" />
        <NewButtonLink to="/" icon={<FaComment />} name="Recados" />
        <NewButtonLink to="/" icon={<FaCamera />} name="Fotos" />
        <NewButtonLink to="/" icon={<FaArchive />} name="Depoimentos" />
      </MenuOptions>
      <div className="edit-profile">
        <a href="/">
          <FaRegEdit />
        </a>
      </div>
      <ModalUpload show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ProfileAsideItems;
