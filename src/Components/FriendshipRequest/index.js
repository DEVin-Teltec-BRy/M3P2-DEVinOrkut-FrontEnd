import * as S from "./cardFrienshipRequest.style";

const FriendshipRequest = ({ id, text, src }) => {
  const handleAccept = () => {
    console.log("aceitar");
  };
  const handleReject = () => {
    console.log("rejeitar");
  };
  console.log(text);
  return (
    <S.CardFrienshipRequest>
      <S.FriendPresenter>
        <img src={src} alt="Foto Perfil" />
        {text}
      </S.FriendPresenter>
      <S.Actions>
        <S.ButtonRequest variant="success" onClick={handleAccept}>
          Aceitar
        </S.ButtonRequest>
        <S.ButtonRequest variant="danger" onClick={handleReject}>
          Recutar
        </S.ButtonRequest>
      </S.Actions>
    </S.CardFrienshipRequest>
  );
};
export default FriendshipRequest;
