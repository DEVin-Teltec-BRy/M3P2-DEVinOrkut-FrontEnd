import React from 'react';
import { FaUserCircle, FaArchive, FaCamera, FaComment } from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import Button from '../Button';

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
        <Button to="/" icon={<FaUserCircle />} name="Perfil" />
        <Button to="/friends" icon={<FaComment />} name="Recados" />
        <Button to="/communities" icon={<FaCamera />} name="Fotos" />
        <Button to="/" icon={<FaArchive />} name="Depoimentos" />
      </Nav>
      <div className="edit-profile">
        <a href="#">Editar Perfil</a>
      </div>
    </>
  );
};

export default ProfileAsideItems;
