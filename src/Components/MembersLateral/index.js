import { CardMain } from "../CardMain";
import { CardSecondary } from "../CardSecondary";
import AsideContent from "./asideContent.styled.js";
export const MembersLateral = ({ isMember, id, communities, members }) => {
    let toAllUri = `/communities/${id}/members`
    if (isMember) {
        return (
            <AsideContent>
                <CardMain title={"Membros"} count={members.length} toAll={toAllUri}>
                    {members.map(({ fullName, id, profilePicture }, key) => (
                        <CardSecondary
                            round
                            to='usuario'
                            id={id}
                            key={key}
                            text={fullName}
                            src={profilePicture.length > 0
                                ? profilePicture[0]
                                : "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"}
                        />
                    ))}
                </CardMain>
                <CardMain title={"Comunidades"} count={communities.length} toAll="communities">
                    {communities.map(({ name, id, logo }, key) => (
                        <CardSecondary
                            round
                            to='comunidade'
                            id={id}
                            key={key}
                            text={name}
                            src={logo}
                        />
                    ))}
                </CardMain>
            </AsideContent>
        )
    } else {
        return (
            <AsideContent>
                <CardMain title={"Membros"} toAll="friends">
                    <p>Você deve ser membro para visualizar isto...</p>
                </CardMain>
                <CardMain title={"Comunidades"} count={communities.length} toAll="communities">
                    {communities.map(({ name, id, logo }, key) => (
                        <CardSecondary
                            round
                            to='comunidade'
                            id={id}
                            key={key}
                            text={name}
                            src={logo}
                        />
                    ))}
                </CardMain>
            </AsideContent>
        )
    };
};

