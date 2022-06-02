import { useMutation } from "@apollo/client";
import { useData } from "../../Context/dataContext";
import { ACCEPT_FRIENDSHIP_REQUEST, REJECT_FRIENDSHIP_REQUEST } from "../../Graphql/Mutations/FriendshipMutations";
import * as S from "./cardFrienshipRequest.style";

const FriendshipRequest = ({ requesterId, text, src }) => {
  const { user } = useData()
  const [ACCEPTREQUEST] = useMutation(ACCEPT_FRIENDSHIP_REQUEST)
  const [REFUSEFRIENDSHIP] = useMutation( REJECT_FRIENDSHIP_REQUEST)
  return (
    <S.CardFrienshipRequest>
      <S.FriendPresenter>
        <img src={src} alt  ="Foto Perfil" />
        <div>
        <h5>{text} {" "}</h5>
        <p>enviou uma solicitação de amizade.</p>
        </div>
      </S.FriendPresenter>
      <S.Actions>
        <S.ButtonRequest variant="success" onClick={ async () => {
          try {
             const response = await ACCEPTREQUEST({ variables: { loggedUserId: user.id, acceptFriendshipId: requesterId}})
             console.log(response)
          } catch(e) {
            console.log(e.message)
          }
        }}>
          Aceitar
        </S.ButtonRequest>
        <S.ButtonRequest variant="danger" onClick={ async () => {
          try {
            const response = await REFUSEFRIENDSHIP({ variables: { loggedUserId: user.id, declineFriendshipId: requesterId}})
            console.log(response)
          } catch(e) {
            console.log(e.message)
          }            
        } }>
          Recutar
        </S.ButtonRequest>
      </S.Actions>
    </S.CardFrienshipRequest>
  );
};

export default FriendshipRequest;
