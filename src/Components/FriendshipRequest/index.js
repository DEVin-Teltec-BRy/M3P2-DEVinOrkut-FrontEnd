import * as S from "./cardFrienshipRequest.style";

const FriendshipRequest = ({ requesterId, text, src, acceptFriendShip, refuseFriendShip, errorAccept, errorRefuse }) => {
  return (
    <S.CardFrienshipRequest>
      {errorAccept && <S.CError><S.Error>{errorAccept.message}</S.Error></S.CError>}
      {errorRefuse && <S.CError><S.Error>{errorRefuse.message}</S.Error></S.CError>}
      <S.FriendPresenter>
        <img src={src} alt  ="Foto Perfil" />
        <div>
          <h5>{text}</h5>
          <p>enviou uma solicitação de amizade.</p>
        </div>
      </S.FriendPresenter>
      <S.Actions>
        <S.ButtonRequest variant="success" onClick={() => acceptFriendShip(requesterId)}>
          Aceitar
        </S.ButtonRequest>
        <S.ButtonRequest variant="danger" onClick={() => refuseFriendShip(requesterId)}>
          Recutar
        </S.ButtonRequest>
      </S.Actions>
    </S.CardFrienshipRequest>
  );
};

export default FriendshipRequest;
