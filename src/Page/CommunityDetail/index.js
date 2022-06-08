import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import Layout from "../../Layout";
import { CommunityDetail } from "../../Components/CommunityDetail";
import { useParams } from "react-router";
import { MembersLateral } from "../../Components/MembersLateral";
import { useData } from "../../Context/dataContext";
import { useQuery } from "@apollo/client";
import { COMMUNITY_DETAILS } from "../../Graphql/Querys/Communities";
import { convertDateFromMilliseconds, timeCalculator } from "../../Utils/index";
import { BottomForum } from "../../Components/Forum/index";
export const CommunityDetailPage = () => {
  const { user } = useData();
  const { communityid } = useParams();
  const { loading, error, data } = useQuery(COMMUNITY_DETAILS, {
    variables: { communityId: communityid },
  });

  if (loading) return <p>Loading...</p>;
  else if (error) return <p>Error :</p>;
  else {
    const { community } = data;
    let isOwner = community.owner.id === user.id ? true : false;
    return (
      <Layout
        lateral={
          <MembersLateral
            isMember={isOwner || community.members.length > 0 ? true : false}
            members={community.members}
            communities={user.communities}
            id={communityid}
          />
        }
      >
        <CardMain count={1000} pagination={<Pagination />}>
          {
            <CommunityDetail
              id={communityid}
              title={community.name}
              category={community.category}
              creatAt={convertDateFromMilliseconds(community.creation_date)}
              owner={community.owner.fullName}
              imgsrc={community.logo}
              isowner={isOwner}
              description={community.description}
            >
              {community.foruns.map((forum) => {
                return (
                  <BottomForum
                    forumid={forum.id}
                    comunityid={communityid}
                    key={forum.id}
                    lastUserImg={forum.comments[0].author.profilePicture[0]}
                    title={forum.name}
                    replys={forum.comments.length}
                    lastResponse={timeCalculator(
                      forum.comments[0].creation_date
                    )}
                  />
                );
              })}{" "}
            </CommunityDetail>
          }
        </CardMain>
      </Layout>
    );
  }
};
