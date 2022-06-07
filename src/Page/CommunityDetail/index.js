import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import Layout from "../../Layout";
import { CommunityDetail } from "../../Components/CommunityDetail";
import { useParams } from 'react-router'
import { MembersLateral } from "../../Components/MembersLateral";
import { useData } from "../../Context/dataContext";
import { useQuery } from "@apollo/client";
import { COMMUNITY_DETAILS } from "../../Graphql/Querys/Communities";
import { convertDateFromMilliseconds } from "../../Utils/index";

export const CommunityDetailPage = () => {
    const { user } = useData();
    const { communityid } = useParams()
    const { loading, error, data } = useQuery(COMMUNITY_DETAILS, { variables: { communityId: communityid } });


    if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error :</p>;
    else {
        const { community } = data;
        let isOwner = community.owner.id === user.id ? true : false;
        let isMember = isOwner && community.members.length > 0 ? true : false;

        return (
            <Layout lateral={<MembersLateral isMember={isMember} members={community.members} communities={user.communities} id={communityid} />}>
                <CardMain count={1000} pagination={<Pagination />}>
                    {<CommunityDetail
                        title={community.name}
                        category={community.category}
                        creatAt={convertDateFromMilliseconds(community.creation_date)}
                        owner={community.owner.fullName}
                        imgsrc={community.logo}
                        isowner={isOwner}
                        description={community.description}
                    />}

                </CardMain>
            </Layout>
        );
    }
};

