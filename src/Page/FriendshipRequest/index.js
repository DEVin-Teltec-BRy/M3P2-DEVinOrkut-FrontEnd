import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import FriendshipRequest from "../../Components/FriendshipRequest";
import Layout from "../../Layout";
import { useData } from "../../Context/dataContext";
import { Lateral } from "../../Components/Lateral";
import profileDefaultF from '../../Assets/images/default-f.png';
import profileDefaultM from '../../Assets/images/default-m.png';

export const FriendshipRequestPage = () => {
  const { user } = useData();

  return (
    <Layout lateral={<Lateral content={user.friends} />}>
      <CardMain
        title="Solicitações Pendentes"
        count={user.friendRequest.length}
        pagination={
          <Pagination
            nro={
              user.friendRequest.length === 0 ? 1 : user.friendRequest.length
            }
          />
        }
      >
        {user.friendRequest.length > 0 ? (
          user.friendRequest.map(({ id, fullName, gender, profilePicture }, key) => (
            <FriendshipRequest
              key={key}
              text={fullName}
              src={profilePicture[0] || gender.substr(1).toUpperCase() === "F" ? profileDefaultF : profileDefaultM }
              round={true}
              size="md"
              requesterId={id}
            />
          ))
        ) : (
          <p>Nenhuma solicitação pendente</p>
        )}
      </CardMain>
    </Layout>
  );
};
