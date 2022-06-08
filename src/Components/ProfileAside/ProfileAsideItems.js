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
import {  OverlayTrigger, Tooltip } from 'react-bootstrap';


const ProfileAsideItems = ({
  name,
  profilePicture,
  gender,
  relationship,
  city,
  state,
}) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <OverlayTrigger
        overlay={<Tooltip id="edit">Clique para adicionar</Tooltip>}
      >
        <ProfileAsideButton onClick={() => setModalShow(true)}>
          <img src={profilePicture} alt={name} />
        </ProfileAsideButton>
      </OverlayTrigger>
      <h2>{name}</h2>
      <ul>
        <li>
          {gender}, {relationship}
        </li>
        <li>
          {city}, {state}
        </li>
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
