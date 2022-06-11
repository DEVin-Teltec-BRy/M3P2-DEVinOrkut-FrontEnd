import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Lateral } from "../../Components/Lateral";
import { Pagination } from "../../Components/Pagination";
import Layout from "../../Layout";
import { useEffect, useState } from "react";
import { Loading } from "../../Components/Loading";
import { useLocation } from "react-router-dom";
import { GET_FRIENDS } from "../../Graphql/Querys";
import { useQuery } from "@apollo/client";
import { useData } from "../../Context/dataContext";

 const FriendPage = () => {
  const { user } = useData();
  const location = useLocation();
  const [listFriend, setList] = useState(false);
  const nPerPage = 4;
  const [paginating, setPaginations] = useState({
    count: 0,
    currentPage: 1,
    nextPage: 0,
    prevPage: 0,
    totalPages: 0,
  });

  const { loading, data, refetch} = useQuery(GET_FRIENDS, {
    variables: {
      pagination: {
        page: paginating?.currentPage,
        per_page: nPerPage,
      },
    },
  });
  useEffect(() => {    
    if (data) {
      const { getFriends } = data;
      const { pagination, results,  } = getFriends;
      setList(results);
      setPaginations((_) => pagination);
    }
  }, [data]);

  const handleNextPage = (page) => {
    refetch({
      pagination: {
        page: page,
        per_page: nPerPage,
      },
    });
  };
  const { communities } = location.state;
  return (
     <Layout lateral={<Lateral content={communities ? communities : []} title="Comunidades" />} visitedData={user}>
      <CardMain
        title="Amigos"
        count={paginating?.count}
        pagination={
          <Pagination
            pageChange={handleNextPage}
            nro={paginating?.count / nPerPage}
            index={paginating?.currentPage}
          />
        }>
        {loading && <Loading />}
        {listFriend?.length > 0 &&
          listFriend.map(({ fullName, id, profilePicture }, key) => (
            <CardSecondary
              key={key}
              round
              to="usuario"
              id={id}
              text={fullName}
              src={
                profilePicture.length > 0
                  ? profilePicture[0]
                  : "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"
              }
            />
          ))}
        {!listFriend && (
          <span>O usuário não possui nenhum amigo!</span>
        )}        
      </CardMain>
    </Layout>
  );
};

export default FriendPage;