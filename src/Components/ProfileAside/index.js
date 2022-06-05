import ProfileAsideItems from './ProfileAsideItems';
import * as S from './style';
import { useData } from '../../Context/dataContext';

const Profile = () => {
  const { user } = useData();

  const DUMMY = {
    id: 'A1',
    name: 'Elon Musk',
    pictureProfile: '/assets/images/elon-musk.webp',
    genre: 'Masculino',
    relationship: 'Ex da Grimer',
    local: 'Starbase, TX',
  };

  return (
    <S.ProfileContainer>
      <ProfileAsideItems
        key={user.id}
        name={user.fullName}
        pictureProfile={user.pictureProfile || DUMMY.pictureProfile}
        relationship={user.relationship}
        local={user.local}
      />
    </S.ProfileContainer>
  );
};

export default Profile;
