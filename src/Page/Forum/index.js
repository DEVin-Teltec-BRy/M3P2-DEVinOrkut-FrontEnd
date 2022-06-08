import { useQuery } from "@apollo/client";
import { useParams } from 'react-router'
import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import { MembersLateral } from "../../Components/MembersLateral";
import Layout from "../../Layout";
import { useData } from "../../Context/dataContext";
import { COMMUNITY_AND_FORUM } from "../../Graphql/Querys/Communities";
import { ForumCard } from "../../Components/Forum/index";
import { timeCalculator } from "../../Utils/index";
export const ForumPage = () => {
    const { user } = useData();
    const { communityid, forumid } = useParams()
    const { loading, error, data } = useQuery(COMMUNITY_AND_FORUM, { variables: { communityId: communityid, forumId: forumid } });

    if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error :</p>;
    else {
        const { community, forum } = data;
        return (
            <Layout lateral={<MembersLateral
                isMember={true}
                members={community.members} communities={user.communities} id={'communityid'} />}>
                <CardMain
                    title={forum.name}
                    count={forum.comments.length}
                    pagination={<Pagination />}
                >
                    {forum.comments.map((comment) => {
                        return (
                            <ForumCard
                                key={comment.id}
                                content={comment.description}
                                userName={comment.author.fullName}
                                userImg={comment.author.profilePicture[0]}
                                creatAt={timeCalculator(comment.creation_date)}
                                userid={comment.author.id}
                                canEditOrDel={comment.author.id === user.id || community.owner.id === user.id ? true : false}
                            />)
                    })}

                </CardMain>
            </Layout>
        );
    }
};