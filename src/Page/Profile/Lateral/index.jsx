import { CardMain } from "../../../Components/CardMain";
import { CardSecondary } from "../../../Components/CardSecondary";
import { useData } from "../../../Context/dataContext";
import { ContentLateral } from "./lateral.styled";
import profileDefaultM from "../../../Assets/images/default-m.png";
import profileDefaultF from "../../../Assets/images/default-f.png";

export const LateralProfile = () => {
  const { user: { friends, communities } } = useData();
  return (
    <ContentLateral>
      <CardMain title="Amigos" count={friends.length} toAll='friends'>
        {friends.map((friend, key) => (
          <CardSecondary
            friend={friend}
            key={key}
            round
            text={friend.fullName}
            src={friend.profilePicture[0] || friend.gender.substr(1).toUpperCase() === 'F' ? profileDefaultF : profileDefaultM}
          />
        ))}
      </CardMain>
      <CardMain title="Comunidades" count={communities.length} toAll='communities'>
        {communities.map((communitie, idx) => (
          <CardSecondary
            communitie={communitie}
            size="md"
            key={idx}
            text={communitie.name}
            src={communitie.logo}
          />
        ))}
      </CardMain>
    </ContentLateral>
  );
};
