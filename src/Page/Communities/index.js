import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import ModalComponent from "../../Components/Modal/CreateCommunity";
import CommunitiesList from "../../Components/CommunitiesList";
import Layout from "../../Layout";
import { Lateral } from "../../Components/Lateral";
import { useData } from "../../Context/dataContext";
import { GET_COMMUNITIES } from "../../Graphql/Querys/Communities";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const CommunityPage = () => {
  const { user } = useData();
  const [ communities, setCommunities ] = useState([]);
  const { data } = useQuery(GET_COMMUNITIES);

  useEffect(()=>{
    if(data) {
      setCommunities(data.communities);
    }
  }, [data])
  console.log(user)
  return (
    <Layout lateral={<Lateral content={user.friends} title="Amigos" />} visitedData={user}>
      <CardMain
        title="Comunidades"
        count={communities.length}

        pagination={<Pagination />}
      >
        <CommunitiesList communities={communities}/>
        <ModalComponent />
      </CardMain>
    </Layout>
  );
};
export default CommunityPage