import ProfileAsideItems from "./ProfileAsideItems";
import * as S from "./style";
import { useData } from "../../Context/dataContext";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../../Graphql/Querys";
import { Loading } from "../Loading";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useData();
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: id },
  });

  let userData = null;

  if (id) {
    userData = data.user;
  } else {
    userData = user;
  }

  return id && loading ? (
    <Loading />
  ) : id && error ? (
    <Link to="/" />
  ) : (
    <S.ProfileContainer>
      <ProfileAsideItems
        key={userData.id}
        name={userData.fullName}
        profilePicture={
          userData.profilePicture.length > 0
            ? userData.profilePicture[0]
            : "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"
        }
        relationship={userData.relationship}
        city={userData.city}
        state={userData.state}
        gender={userData.gender}
        buttonText={userData.fullName}
      />
    </S.ProfileContainer>
  );
};

export default Profile;
