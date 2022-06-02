import ProfileAsideItems from './ProfileAsideItems';
import * as S from './style';

const Profile = () => {
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
        key={DUMMY.id}
        name={DUMMY.name}
        pictureProfile={DUMMY.pictureProfile}
        relationship={DUMMY.relationship}
        local={DUMMY.local}
      />
    </S.ProfileContainer>
  );
};

export default Profile;
