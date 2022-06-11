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
import { useEffect, useState } from "react";


const CommunityDetailPage = () => {
  const { user } = useData();
  const [ communityPage, setCommunityPage ] = useState(null);
  const { communityid } = useParams();
  const { loading, error, data } = useQuery(COMMUNITY_DETAILS, {
    variables: { communityId: communityid },
  });
  useEffect(()=>{
    if(data){
      setCommunityPage(data.community);
    }
  }, [data])
  if (loading) return <p>Loading...</p>;
  console.log(error)
  if (error) return <p>Error :</p>;
  const community  = communityPage;
  let isOwner = community?.owner.id === user.id ? true : false;
  return (
    <Layout
      visitedData={user}
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
            categoryEnum={community.categoryEnum}
            creatAt={convertDateFromMilliseconds(community.creation_date)}
            owner={community.owner.fullName}
            imgsrc={community.logo}
            isowner={isOwner}
            description={community.description}
            members={community.members}
          >
            {community.foruns.length === 0 ? (
              <p>
                Nenhum tópico para exibir aqui, experimente criar um &#129299;
              </p>
            ) : (
              community.foruns
                .map((forum) => {
                  return (
                    <BottomForum
                      forumid={forum.id}
                      comunityid={communityid}
                      key={forum.id}
                      lastUserImg={
                        forum.comments.length > 0
                          ? forum.comments[0].author.profilePicture.length > 0
                            ? forum.comments[0].author.profilePicture[0]
                            : "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"
                          : forum.owner.profilePicture.length > 0
                          ? forum.owner.profilePicture[0]
                          : "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"
                      }
                      title={forum.name}
                      replys={forum.comments.length}
                      lastResponse={timeCalculator(
                        forum.comments.length > 0
                          ? forum.comments[0].creation_date
                          : forum.creation_date
                      )}
                    />
                  );
                })
                .reverse()
            )}
          </CommunityDetail>
        }
      </CardMain>
    </Layout>
  );
};

export default CommunityDetailPage;