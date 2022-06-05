import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import FriendshipRequest  from '../../Components/FriendshipRequest';
import Layout from "../../Layout";
import { useData } from "../../Context/dataContext";
import { Lateral } from "../../Components/Lateral";

export const FriendshipRequestPage = () => {
  const { user } = useData()

  return (
    <Layout lateral={<Lateral content={user.friends} />}>
      <CardMain title="Solicitações Pendentes" count={user.friendRequest.length} pagination={<Pagination nro={user.friendRequest.length === 0 ? 1: user.friendRequest.length}/>}>
        {user.friendRequest.length > 0 ? user.friendRequest.map(({ id, fullName }, key) => (
          <FriendshipRequest
              key={key}
              round={true}
              size="md"
              text={fullName}
              requesterId={id}
              src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg" />
        )) : (<p>Nenhuma solicitação pendente</p>)}
      </CardMain>
    </Layout>
  );
};