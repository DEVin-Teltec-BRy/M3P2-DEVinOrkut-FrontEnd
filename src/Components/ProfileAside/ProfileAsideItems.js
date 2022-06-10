import React, { useState, useEffect } from 'react';
import {
  IoPersonCircleOutline,
  IoCameraOutline,
  IoChatboxOutline,
  IoToggleOutline,
  IoFileTrayOutline,
  IoAddCircle,
} from 'react-icons/io5';
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
import { UPDATE_USER_MUTATION } from '../../Graphql/Mutations/UpdateUserMutation';
import { useMutation } from '@apollo/client';

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


  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [updateUser] = useMutation(UPDATE_USER_MUTATION);

  const handleSubmit = async () => {
    try {
      const { data } = await updateUser({
        variables: {
          user: {
            fullName: state.FormUserRegister.fullName,
            gender: state.FormUserRegister.gender,
            postal: state.FormUserRegister.postal,
            city: state.FormUserRegister.city,
            state: state.FormUserRegister.state,
            address: state.FormUserRegister.address,
            number: state.FormUserRegister.number,
            complement: state.FormUserRegister.complement,
            district: state.FormUserRegister.district,
            reference: state.FormUserRegister.reference,
            relationship: state.FormUserRegister.relationship,
            humor: [state.FormUserRegister.humor],
            interests: [state.FormUserRegister.interests],
            aboutMe: state.FormUserRegister.aboutMe,
          },
        },
      });
      setIsSubmitted(true);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!error && isSubmitted) {
      setTimeout(() => {
        console.log("data updated!");
      }, 5000);
    }
  }, [error, isSubmitted]);

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
          </ProfileAsideButton>
          <AddImageButton addButtonShow={addButtonShow}>
              <IoAddCircle size={50} />
            </AddImageButton>
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
        <EditButton onClick={handleSubmit}>
          <IoToggleOutline size={25} /> Editar Perfil
        </EditButton>
      </div>
      <ModalUpload show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ProfileAsideItems;
