import { CardMain } from "../../../Components/CardMain";
import { CardSecondary } from "../../../Components/CardSecondary";
import { useData } from "../../../Context/dataContext";
import { ContentLateral } from "./lateral.styled";

export const LateralProfile = ({ friendsUser, communitiesUser }) => {
  const {
    user: { friends, communities },
  } = useData();
  const selectFriends = friendsUser ? friendsUser : friends;
  const selectcommunities = communitiesUser ? communitiesUser : communities;

  return (
    <ContentLateral>
      <CardMain title="Amigos" count={selectFriends.length} toAll="friends">
        {selectFriends.map(({ fullName, id, profilePicture }, key) => (
          <CardSecondary
            key={key}
            round
            to="usuario"
            id={id}
            text={fullName}
            src={profilePicture.length > 0 ? profilePicture[0] : ""}
          />
        ))}
      </CardMain>
      <CardMain
        title="Comunidades"
        count={selectcommunities.length}
        toAll="communities"
      >
        {selectcommunities.map(({ name, id, logo }, key) => (
          <CardSecondary
            size="md"
            to="comunidade"
            key={key}
            round
            id={id}
            text={name}
            src={logo ? logo : ""}
          />
        ))}
      </CardMain>
    </ContentLateral>
  );
};
