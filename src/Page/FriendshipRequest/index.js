import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import FriendshipRequest  from '../../Components/FriendshipRequest';
import Layout from "../../Layout";
import { Lateral } from "../Communities"
import { useData } from "../../Context/dataContext";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_FRIENDSHIP_REQUEST } from "../../Graphql/Querys/FriendshipResquest";

export const FriendshipRequestPage = () => {
  const { user: { friendRequest }, updateUser } = useData()

  const { loading, error, data } = useQuery(GET_FRIENDSHIP_REQUEST, {
    variables: { userId: process.env.REACT_APP_USER_ID },
  });

  useEffect(() => {
    if (data) {
      const { user: { friendRequest } } = data;
      updateUser({ friendRequest });
  }
  }, [data]);

  return (
    <Layout lateral={<Lateral />}>
      <CardMain title="Solicitações Pendentes" count={friendRequest.length} pagination={<Pagination />}>
        {loading && <p>Carregando...</p>}
        {error && <p>Erro ao carregar solicitações</p>}
        {friendRequest.length > 0  && friendRequest.map(({ id, fullName }, key) => (
          <FriendshipRequest
              key={key}
              round={true}
              size="md"
              text={fullName}
              requesterId={id}
              src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg" />
        ))}
      </CardMain>
    </Layout>
  );
};