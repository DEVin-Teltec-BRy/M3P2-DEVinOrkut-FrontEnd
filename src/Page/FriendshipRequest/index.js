import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import FriendshipRequest from "../../Components/FriendshipRequest";
import Layout from "../../Layout";
import { useData } from "../../Context/dataContext";
import { Lateral } from "../../Components/Lateral";
import { useMutation } from "@apollo/client";
import { ACCEPT_FRIENDSHIP_REQUEST, REJECT_FRIENDSHIP_REQUEST } from "../../Graphql/Mutations/FriendshipMutations";

const FriendshipRequestPage = () => {
  const { user, updateUser } = useData();
  const [ACCEPTREQUEST, {error: errAccept}] = useMutation(
    ACCEPT_FRIENDSHIP_REQUEST
  );
  const [REFUSEFRIENDSHIP, {error: errRefuse}] = useMutation(
    REJECT_FRIENDSHIP_REQUEST
  );

  const handleAcceptFriendship = async (acceptFriendshipId) => {
    const response = await ACCEPTREQUEST({
      variables: { loggedUserId: user.id, acceptFriendshipId },
    });
    const { data } = response;
    updateUser({ ...data.acceptRequest });
  };
  const handleRefuseFriendship = async (declineFriendshipId) => {
    const response = await REFUSEFRIENDSHIP({
      variables: { loggedUserId: user.id, declineFriendshipId },
    });
    const { data } = response;
    updateUser({ ...data.refuseFriendship });
  };
  return (
    <Layout lateral={<Lateral content={user.friends} title="Amigos" />} visitedData={user}>
      <CardMain
        title="Solicitações Pendentes"
        count={user.friendRequest?.length}
        pagination={
          <Pagination
            nro={
              user.friendRequest.length === 0 ? 1 : user.friendRequest.length
            }
          />
        }
      >
        {user.friendRequest.length > 0 ? (
          user.friendRequest.map(({ id, fullName }, key) => (
            <FriendshipRequest
              acceptFriendShip={handleAcceptFriendship}
              refuseFriendShip={handleRefuseFriendship}
              errorAccept={errAccept}
              errorRefuse={errRefuse}
              key={key}
              round={true}
              size="md"
              text={fullName}
              requesterId={id}
              src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
            />
          ))
        ) : (
          <p>Nenhuma solicitação pendente</p>
        )}
      </CardMain>
    </Layout>
  );
};

export default FriendshipRequestPage;