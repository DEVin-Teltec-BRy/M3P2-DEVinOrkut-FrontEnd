import { useMutation } from "@apollo/client";
import { useData } from "../../Context/dataContext";
import { ACCEPT_FRIENDSHIP_REQUEST, REJECT_FRIENDSHIP_REQUEST } from "../../Graphql/Mutations/FriendshipMutations";
import * as S from "./cardFrienshipRequest.style";

const FriendshipRequest = ({ requesterId, text, src }) => {
  const { user, updateUser } = useData()
  const [ACCEPTREQUEST, {error: errorAccept}] = useMutation(ACCEPT_FRIENDSHIP_REQUEST)
  const [REFUSEFRIENDSHIP,{ error: errorRefuse }] = useMutation( REJECT_FRIENDSHIP_REQUEST)
  return (
    <S.CardFrienshipRequest>
      {errorAccept && <S.CError><S.Error>{errorAccept.message}</S.Error></S.CError>}
      {errorRefuse && <S.CError><S.Error>{errorRefuse.message}</S.Error></S.CError>}
      <S.FriendPresenter>
        <img src={src} alt  ="Foto Perfil" />
        <div>
        <h5>{text} {" "}</h5>
        <p>enviou uma solicitação de amizade.</p>
        </div>
      </S.FriendPresenter>
      <S.Actions>
        <S.ButtonRequest variant="success" onClick={ async () => {
             const response = await ACCEPTREQUEST({ variables: { loggedUserId: user.id, acceptFriendshipId: requesterId}})
             const { data } = response
             updateUser({friendRequest: data.acceptFriendship})
        }}>
          Aceitar
        </S.ButtonRequest>
        <S.ButtonRequest variant="danger" onClick={ async () => {
            const response = await REFUSEFRIENDSHIP({ variables: { loggedUserId: user.id, declineFriendshipId: requesterId}})
            const { data } = response
             updateUser({friendRequest: data.acceptFriendship})         
        } }>
          Recutar
        </S.ButtonRequest>
      </S.Actions>
    </S.CardFrienshipRequest>
  );
};

export default FriendshipRequest;
