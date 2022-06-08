import React from 'react';
import {
  IoPersonCircleOutline,
  IoCameraOutline,
  IoChatboxOutline,
  IoToggleOutline,
  IoFileTrayOutline,
  IoAddCircle,
} from 'react-icons/io5';
import { Nav } from 'react-bootstrap';
import { NewButtonLink } from '../Button';
import {
  AddImageButton,
  ContainerImage,
  EditButton,
  Image,
  MenuOptions,
  ProfileAsideButton,
  ProfileAsideImage,
} from './style';
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
  const [addButtonShow, setAddButtonShow] = React.useState(false);
  const { id } = useParams();

  return (
    <>
      {!id && (
        <ContainerImage>
          <ProfileAsideButton onClick={() => setModalShow(true)}>
            <Image
              src={profilePicture}
              alt={name}
              onMouseEnter={() => setAddButtonShow((prev) => !prev)}
              onMouseLeave={() => setAddButtonShow((prev) => !prev)}
            />
            <AddImageButton addButtonShow={addButtonShow}>
              <IoAddCircle size={50} />
            </AddImageButton>
          </ProfileAsideButton>
        </ContainerImage>
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
      <MenuOptions>
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
      </MenuOptions>
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
