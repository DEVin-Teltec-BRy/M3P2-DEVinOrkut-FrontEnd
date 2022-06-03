import { CardMain } from "../../../Components/CardMain";
import { CardSecondary } from "../../../Components/CardSecondary";
import { ContentLateral } from "./lateral.styled";

export const LateralProfile = () => {
  return (
    <ContentLateral>
      <CardMain title="Amigos" count={9} toAll='friends'>
        {[...Array(6)].map((_, key) => (
          <CardSecondary
            key={key}
            round
            text="Bill Gates"
            src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
          />
        ))}
      </CardMain>
      <CardMain title="Comunidades" count={20} toAll='communities'>
        {[...Array(4)].map((_, idx) => (
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
