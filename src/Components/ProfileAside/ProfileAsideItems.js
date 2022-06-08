import React from 'react';
import {
  IoPersonCircleOutline,
  IoCameraOutline,
  IoChatboxOutline,
  IoToggleOutline,
  IoFileTrayOutline,
} from 'react-icons/io5';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NewButtonLink } from '../Button';
import { EditButton, ProfileAsideButton, ProfileAsideImage } from './style';
import ModalUpload from './ModalUpload';
import { useParams } from 'react-router-dom';

const ProfileAsideItems = ({
  name,
  profilePicture,
  gender,
  relationship,
  city,
  state,
  buttonText,
}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { id } = useParams();

  return (
    <>
      {!id && (
        <OverlayTrigger
          overlay={<Tooltip id="edit">Clique para adicionar</Tooltip>}
        >
          <ProfileAsideButton onClick={() => setModalShow(true)}>
            <img src={profilePicture} alt={name} />
          </ProfileAsideButton>
        </OverlayTrigger>
      )}
      {id && (
        <ProfileAsideImage>
          <img src={profilePicture} alt={name} />
        </ProfileAsideImage>
      )}
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
        <NewButtonLink
          to="/"
          icon={<IoPersonCircleOutline size={25} />}
          name={id ? 'Meu Perfil' : buttonText}
          bg="#EBEBED"
        />
        <NewButtonLink
          to="/friends"
          icon={<IoChatboxOutline size={24} />}
          name="Recados"
        />
        <NewButtonLink
          to="/communities"
          icon={<IoCameraOutline size={24} />}
          name="Fotos"
        />
        <NewButtonLink
          to="/"
          icon={<IoFileTrayOutline size={24} />}
          name="Depoimentos"
        />
      </Nav>
      <div className="edit-profile">
        <EditButton onClick={() => {}}>
          <IoToggleOutline size={25} /> Editar Perfil
        </EditButton>
      </div>
      <ModalUpload show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ProfileAsideItems;
