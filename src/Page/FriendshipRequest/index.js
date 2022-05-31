import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import FriendshipRequest  from '../../Components/FriendshipRequest';
import { GET_FRIENDSHIP_REQUEST } from "../../Graphql/Querys/FriendshipResquest";
import { UserLayout } from "../../Layout/User";
import { Lateral } from "../Communities"

export const FriendshipRequestPage = () => {
    const [friendshipRequests, setFriendshipRequests] = useState([]);
    const [total, setTotal] = useState(0);
    const { loading, error, data } = useQuery(GET_FRIENDSHIP_REQUEST, {
      variables: { userId: process.env.REACT_APP_USER_ID },
    });
  
    useEffect(() => {
      if (data) {
        const { user: { friendRequest } } = data;
        setTotal(friendRequest.length);
        setFriendshipRequests(friendRequest);
    }
    }, [data]);
  return (
    <UserLayout lateral={<Lateral />}>
    {loading && <p>Loading...</p>}
    {error && <p>Erro ao carregar as solicitações :(</p>}
      <CardMain title="Solicitações Pendentes" count={total} pagination={<Pagination />}>
        {friendshipRequests && friendshipRequests.map(({ id, fullName }, key) => (
            <FriendshipRequest
                key={key}
                round={true}
                size="md"
                text={fullName}
                requesterId={id}
                src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg" />
        ))}
      </CardMain>
    </UserLayout>
  );
};