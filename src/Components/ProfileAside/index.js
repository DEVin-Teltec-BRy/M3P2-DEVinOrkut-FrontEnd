import ProfileAsideItems from './ProfileAsideItems';
import * as S from './style';
import { useData } from '../../Context/dataContext';
import { useParams } from 'react-router-dom';

const Profile = ({ visitedData }) => {
  const { user } = useData();
  const { id } = useParams();

  return (
    <S.ProfileContainer>
      <ProfileAsideItems
        key={user.id}
        name={id ? visitedData.fullName : user.fullName}
        profilePicture={
          id
            ? visitedData.profilePicture[0]
            : user.profilePicture[0] ||
              'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
        }
        relationship={id ? visitedData.relationship : user.relationship}
        city={id ? visitedData.city : user.city}
        state={id ? visitedData.state : user.state}
        gender={id ? visitedData.gender : user.gender}
        buttonText={user.fullName}
      />
    </S.ProfileContainer>
  );
};

export default Profile;
