import React from 'react';
import { FaUserCircle, FaArchive, FaCamera, FaComment } from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import { NewButtonLink } from '../Button';

const ProfileAsideItems = ({
  name,
  pictureProfile,
  genre,
  relationship,
  local,
}) => {
  return (
    <>
      <img src={pictureProfile} alt={name} />
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
        <a href="/">Editar Perfil</a>
      </div>
    </>
  );
};

export default ProfileAsideItems;
