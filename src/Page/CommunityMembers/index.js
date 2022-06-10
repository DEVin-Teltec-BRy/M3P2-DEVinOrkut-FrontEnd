import { useParams } from 'react-router'
import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Pagination } from "../../Components/Pagination";
import { useData } from "../../Context/dataContext";
import Layout from "../../Layout";
import { LateralProfile } from "../Profile/Lateral"
import { useQuery } from "@apollo/client";
import { COMMUNITY_MEMBERS } from "../../Graphql/Querys/Communities";

export const CommunityMembersPage = () => {
    const { user } = useData();
    const { communityid } = useParams()
    const { loading, error, data } = useQuery(COMMUNITY_MEMBERS, { variables: { communityId: communityid } });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    else {
        const { community } = data;
        if (community.members.length === 0 && user.id === data.community.owner.id) {
            return (
                <Layout lateral={<LateralProfile />}>
                    <CardMain title={`Membros da ${community.name}`}><p>Sem Membros Ainda...</p> </CardMain></Layout>)
        }
        else if (community.members.length === 0 && user.id !== data.community.owner.id) {
            return (<Layout lateral={<LateralProfile />}>
                <CardMain title={`Membros da ${community.name}`}> <p>Você deve ser membro para visualizar isto...</p></CardMain > </Layout>)
        } else {
            return (
                <Layout lateral={<LateralProfile />}>
                    <CardMain title={`Membros da ${community.name}`} count={community.members.length} pagination={<Pagination />}>
                        {community.members.map(({ fullName, id, profilePicture }, key) => (
                            <CardSecondary
                                key={key}
                                round
                                to='usuario'
                                id={id}
                                text={fullName}
                                src={profilePicture.length > 0
                                    ? profilePicture[0]
                                    : "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"}
                            />
                        ))}
                    </CardMain>
                </Layout>
            );
        }
    }
};