import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Lateral } from "../../Components/Lateral";
import { Pagination } from "../../Components/Pagination";
import { useData } from "../../Context/dataContext";
import Layout from "../../Layout";
import { useState } from "react";
import { Loading } from "../../Components/Loading";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../../Graphql/Querys";
import { Link } from "react-router-dom";

export const FriendPage = () => {
  const [index, setIndex] = useState(1);
  const { user } = useData();
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: id },
  });

  let userData = null;

  if (id && data) {
    userData = data.user;
  } else {
    userData = user;
  }

  return id && loading ? (
    <Loading />
  ) : id && error ? (
    <Link to="/" />
  ) : (
    <Layout
      lateral={<Lateral content={userData.communities} title="Comunidades" />}
    >
      <CardMain
        title="Amigos"
        count={userData.friends.length}
        pagination={
          <Pagination
            pageChange={setIndex} // Atualiza o índice da páginação
            nro={userData.friends.length / 20} // Limita o número de usuários por página em 20
            index={index}
          />
        }
      >
        {userData.friends.length > 0 ? (
          userData.friends.map(({ fullName, id, profilePicture }, key) =>
            key < index * 20 && key >= (index - 1) * 20 ? ( // Mapeia os usuários a serem mostrados de acordo com o índice da página
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
            ) : null
          )
        ) : (
          <span>O usuário não possui nenhum amigo!</span>
        )}
      </CardMain>
    </Layout>
  );
};
