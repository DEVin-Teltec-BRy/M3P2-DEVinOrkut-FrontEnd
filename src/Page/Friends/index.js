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
import { PlaceholderUser } from "../../Components/PlaceHolder";

export const FriendPage = ({ visitedData }) => {
  const location = useLocation();
  const [listFriend, setList] = useState([]);
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
      setTimeout(() => {
        setList(results);
      }, 2000);
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

  return listFriend ? (
    <Layout lateral={<Lateral content={communities} title="Comunidades" />}>
      <CardMain
        title="Amigos"
        count={paginating?.count}
        pagination={
          <Pagination
            pageChange={handleNextPage}
            nro={paginating?.count / nPerPage}
            index={paginating?.currentPage}
          />
        }
      >
        {loading &&
          [...Array(4)].map((_, idx) => <PlaceholderUser key={idx} />)}
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
        {listFriend?.length === 0 && !loading && (
          <span>O usuário não possui nenhum amigo!</span>
        )}
      </CardMain>
    </Layout>
  ) : (
    <Loading />
  );
};
