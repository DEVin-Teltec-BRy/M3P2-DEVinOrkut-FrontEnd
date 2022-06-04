import { CardMain } from "../../../Components/CardMain";
import { CardSecondary } from "../../../Components/CardSecondary";
import { useData } from "../../../Context/dataContext";
import { ContentLateral } from "./lateral.styled";

export const LateralProfile = () => {
  const { user: { friends, communities } } = useData();

  return (
    <ContentLateral>
      <CardMain title="Amigos" count={friends.length} toAll='friends'>
        {friends.map((_, key) => (
          <CardSecondary
            key={key}
            round
            text="Bill Gates"
            src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
          />
        ))}
      </CardMain>
      <CardMain title="Comunidades" count={communities.length} toAll='communities'>
        {communities.map((_, idx) => (
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
