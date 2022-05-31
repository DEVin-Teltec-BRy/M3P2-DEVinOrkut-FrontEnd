import { useQuery } from "@apollo/client";
import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { ModalComponent } from "../../Components/Modal";
import { Pagination } from "../../Components/Pagination";
import { GET_ALL_COMMUNITIES } from "../../Graphql/Querys";
import { UserLayout } from "../../Layout/User";

export const CommunityPage = () => {
  // eslint-disable-next-line
  const { loading, error, data } = useQuery(GET_ALL_COMMUNITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return error.message;
  // if (data) return console.log(data.communities);

  return (
    <UserLayout lateral={<Lateral />}>
      <CardMain title="Comunidades" count={1000} pagination={<Pagination />}>
        {data.communities.map(({ name, logo, id }) => (
          <CardSecondary key={id} size="md" text={name} src={logo} />
        ))}
        <ModalComponent />
      </CardMain>
    </UserLayout>
  );
};

export const Lateral = () => {
  return (
    <CardMain title="Amigos" count={2000} toAll="friends">
      {[...Array(8)].map((_, key) => (
        <CardSecondary
          round
          key={key}
          text="Bill Gates"
          src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
        />
      ))}
    </CardMain>
  );
};
