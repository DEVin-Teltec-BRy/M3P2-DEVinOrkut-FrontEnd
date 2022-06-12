import ProfileAsideItems from './ProfileAsideItems';
import * as S from './style';
import { useData } from '../../Context/dataContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Loading } from '../Loading';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../Graphql/Querys';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../Store/rootSlice';
import ModalUpload from './ModalUpload';


const Profile = () => {
  const { user: loggedUser } = useData();
  const { id } = useParams();

  const navigate = useNavigate();

  const { data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: id },
    skip: loggedUser.id === id ? true : false,
  });
  const [userPage, setUserPage] = useState(null);

  useEffect(() => {
    if (id === loggedUser.id) {
      navigate('/');
    }
    if (loggedUser && !data) {
      setUserPage(loggedUser);
    }
    if (data) {
      const { user } = data;
      setUserPage(user);
    }
  }, [
    navigate,
    data,
    id,
    loggedUser,
    loggedUser.id,
    loggedUser?.friendRequest,
    userPage?.friendRequest,
  ]);

  const isOpen = useSelector((state) => state.IsOpen);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(openModal());
  };

  return (data && userPage) || (userPage && loggedUser) ? (
    <S.ProfileContainer>
      <ProfileAsideItems
        key={userPage.id}
        name={userPage.fullName}
        profilePicture={
          userPage.profilePicture.length > 0
            ? userPage.profilePicture[0]
            : 'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
        }
        relationship={userPage.relationship}
        city={userPage.city}
        state={userPage.state}
        gender={userPage.gender}
        buttonText={userPage.fullName}
        onClick={handleModalOpen}
      />
      <ModalUpload
        show={isOpen}
        onHide={() => {
          dispatch(closeModal());
        }}
      />
      
    </S.ProfileContainer>
  ) : (
    <Loading />
  );
};

export default Profile;
