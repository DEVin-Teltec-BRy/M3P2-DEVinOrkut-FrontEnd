import { CardMain } from "../../../Components/CardMain";
import { CardSecondary } from "../../../Components/CardSecondary";
import { ContentLateral } from "./lateral.styled";

export const LateralProfile = ({user}) => {
  return (
    <ContentLateral>
      <CardMain
        title="Amigos"
        count={user.friends.length}
        toAll="friends"
        friends={user.friends}
        communities={user.communities}
      >
        {user.friends.length > 0 && (user.friends.map(({ fullName, id, profilePicture }, key) => (
          <CardSecondary
            key={key}
            round
            to="usuario"
            id={id}
            text={fullName}
            src={user.profilePicture.length > 0 ? profilePicture[0] : ""}
          />
        )))}
        {user.friends.length === 0 && <span>O usuário não possui nenhum amigo!</span>}
      </CardMain>
      <CardMain
        title="Comunidades"
        count={user.communities.length}
        toAll="communities"
        communities={user.communities}
        friends={user.friends}
      >
        {user.communities.length > 0 ? (
          user.communities.map(({ name, id, logo }, key) => (
            <CardSecondary
              size="md"
              to="comunidade"
              key={key}
              round
              id={id}
              text={name}
              src={logo ? logo : ""}
            />
          ))
        ) : (
          <span>O usuário não possui nenhuma comunidade!</span>
        )}
      </CardMain>
    </ContentLateral>
  );
};
