import React from 'react';
import {
  FaUserCircle,
  FaArchive,
  FaCamera,
  FaComment,
  FaRegEdit,
} from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import { NewButtonLink } from '../Button';
import { ProfileAsideButton } from './style';
import ModalUpload from './ModalUpload';

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
