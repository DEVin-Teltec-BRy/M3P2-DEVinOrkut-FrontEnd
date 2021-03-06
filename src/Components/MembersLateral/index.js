import { CardMain } from "../CardMain";
import { CardSecondary } from "../CardSecondary";
import AsideContent from "./asideContent.styled.js";
import imgPlaceholder from '../../Assets/placeholderImg.webp';

export const MembersLateral = ({ isMember, id, community, members }) => {
  let toAllUri = `/community/${id}/members`;

  if (isMember) {
    return (
      <AsideContent>
        <CardMain title={"Membros"} count={members.length} toAll={toAllUri}>
        {community.members.map(({ fullName, id, profilePicture }, key) => (
            <CardSecondary
              round
              to="usuario"
              id={id}
              key={key}
              text={fullName}
              src={
                profilePicture.length > 0
                  ? profilePicture[0]
                  : imgPlaceholder
              }
            />
          ))}
        </CardMain>
        <CardMain
          title="Comunidades"
          count={10}
          toAll="community"
        >
        <CardSecondary
                round
                to="comunidade"
                id={community.id}
                text={community.name}
                src={community.logo}
              />
        </CardMain>
      </AsideContent>
    );
  } else {
    return (
      <AsideContent>
        <CardMain title={"Membros"} toAll="friends">
          <p>Você deve ser membro para visualizar isto...</p>
        </CardMain>
        <CardMain title={"Comunidades"} count={10} toAll="community">
          <CardSecondary
            round
            to="comunidade"
            id={community.id}
            text={community.name}
            src={community.logo}
          />
        </CardMain>
      </AsideContent>
    );
  }
};

