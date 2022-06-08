import React from 'react';
import {
  FaUserCircle,
  FaArchive,
  FaCamera,
  FaComment,
  FaRegEdit,
} from 'react-icons/fa';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NewButtonLink } from '../Button';
import { ProfileAsideButton } from './style';
import ModalUpload from './ModalUpload';

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
      <OverlayTrigger overlay={<Tooltip id="edit">Adicione uma foto</Tooltip>}>
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
      <Nav className="menu-links">
        <NewButtonLink to="/" icon={<FaUserCircle />} name="Perfil" />
        <NewButtonLink to="/friends" icon={<FaComment />} name="Recados" />
        <NewButtonLink to="/communities" icon={<FaCamera />} name="Fotos" />
        <NewButtonLink to="/" icon={<FaArchive />} name="Depoimentos" />
      </Nav>
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
