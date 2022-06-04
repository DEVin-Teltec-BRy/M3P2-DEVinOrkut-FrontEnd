import ProfileAsideItems from './ProfileAsideItems';
import * as S from './style';
import { useData } from '../../Context/dataContext';
import profileDefaultF from '../../Assets/images/default-f.png';
import profileDefaultM from '../../Assets/images/default-m.png';

const Profile = () => {
  const { user } = useData();
  return (
    <S.ProfileContainer>
      <ProfileAsideItems
        key={user.id}
        name={user.fullName}
        pictureProfile={user.pictureProfile ? user.pictureProfile[0] : user.gender.substr(1).toUpperCase() === 'F' ? profileDefaultF : profileDefaultM}
        relationship={user.relationship}
        local={user.local}
      />
    </S.ProfileContainer>
  );
};

export default Profile;
