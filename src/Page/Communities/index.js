import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Pagination } from "../../Components/Pagination";
import { UserLayout } from "../../Layout/User";

export const CommunityPage = () => {
  return (
    <UserLayout lateral={<Lateral />}>
      <CardMain title="Comunidades" count={1000} pagination={<Pagination />}>
        {[...Array(20)].map((_, key) => (
          <CardSecondary
            key={key}
            round
            text="Full Bugs"
            src="https://thumbs.dreamstime.com/b/o-homem-irado-na-camisa-vermelha-rasga-folha-de-papel-6582601.jpg"
          />
        ))}
      </CardMain>
    </UserLayout>
  );
};

export const Lateral = () => {
  return (
    <CardMain title="Amigos" count={2000} toAll="friends">
      {[...Array(8)].map((_, key) => (
        <CardSecondary
          size="md"
          key={key}
          text="Bill Gates"
          src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
        />
      ))}
    </CardMain>
  );
};
