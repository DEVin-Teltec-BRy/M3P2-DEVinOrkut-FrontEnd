import ProfileAsideItems from './ProfileAsideItems';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../Store/rootSlice';
import ModalUpload from './ModalUpload';

const Profile = ({visitedData}) => {
  const isOpen = useSelector((state) => state.IsOpen);
  const dispatch = useDispatch();
  const handleModalOpen = () => {
    dispatch(openModal());
  };

  return (
      <S.ProfileContainer>
        <ProfileAsideItems
            key={visitedData.id}
            name={visitedData.fullName}
            profilePicture={
              visitedData.profilePicture.length > 0
                  ? visitedData.profilePicture[0]
                  : 'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
            }
            relationship={visitedData.relationship}
            city={visitedData.city}
            state={visitedData.state}
            gender={visitedData.gender}
            buttonText={visitedData.fullName}
            onClick={handleModalOpen}
        />
        <ModalUpload
            show={isOpen}
            onHide={() => {
              dispatch(closeModal());
            }}
        />
      </S.ProfileContainer>
  )
};

export default Profile;