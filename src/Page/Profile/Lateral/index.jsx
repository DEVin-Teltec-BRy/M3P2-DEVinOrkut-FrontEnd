import { CardMain } from "../../../Components/CardMain";
import { CardSecondary } from "../../../Components/CardSecondary";
import { useData } from "../../../Context/dataContext";
import { ContentLateral } from "./lateral.styled";

export const LateralProfile = ({friendsUser, communitiesUser}) => {
  const { user: { friends, communities } } = useData();
  const selectFriends = friendsUser ? friendsUser : friends
  const selectcommunities = communitiesUser ? communitiesUser : communities

  return (
    <ContentLateral>
      <CardMain title="Amigos" count={selectFriends.length} toAll='friends'>
        {selectFriends.map(({fullName, id}, key) => (
          <CardSecondary
            key={key}
            round
            to="usuario"
            id={id}
            text={fullName}
            src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
          />
        ))}
      </CardMain>
      <CardMain title="Comunidades" count={selectcommunities.length} toAll='communities'>
        {selectcommunities.map((_, idx) => (
          <CardSecondary
            size="md"
            key={idx}
            text="Full Bugs"
            src="https://thumbs.dreamstime.com/b/o-homem-irado-na-camisa-vermelha-rasga-folha-de-papel-6582601.jpg"
          />
        ))}
      </CardMain>
    </ContentLateral>
  );
};
