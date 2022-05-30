import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Pagination } from "../../Components/Pagination";
import { UserLayout } from "../../Layout/User";
export const FriendPage = () => {


  return (
    <UserLayout lateral={<Lateral />}>
      <CardMain title="Amigos" count={2000} pagination={<Pagination />}>
        {[...Array(20)].map((_, key) => (
          <CardSecondary
            key={key}
            round
            text="Bill Gates"
            src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
          />
        ))}
      </CardMain>
    </UserLayout>
  );
};

export const Lateral = () => {
  return (
    <CardMain title="Comunidades" count={1000} toAll="communities">
      {[...Array(8)].map((_, key) => (
        <CardSecondary
          size="md"
          key={key}
          text="Full Bugs"
          src="https://thumbs.dreamstime.com/b/o-homem-irado-na-camisa-vermelha-rasga-folha-de-papel-6582601.jpg"
        />
      ))}
    </CardMain>
  );
};
