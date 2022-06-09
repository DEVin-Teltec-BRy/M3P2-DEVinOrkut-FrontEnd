import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import Layout from "../../Layout";
import { Lateral } from "../../Components/Lateral";
import { useData } from "../../Context/dataContext";
import { Loading } from "../../Components/Loading";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CardSecondary } from "../../Components/CardSecondary";
import { GET_USER_BY_ID } from "../../Graphql/Querys";
import { Link } from "react-router-dom";

export const CommunityPage = () => {
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
    <Layout lateral={<Lateral content={userData.friends} title="Amigos" />}>
      <CardMain
        title="Comunidades"
        count={userData.communities.length}
        pagination={
          <Pagination
            pageChange={setIndex} // Atualiza o índice da páginação
            nro={userData.communities.length / 20} // Limita o número de usuários por página em 20
            index={index}
          />
        }
      >
        {userData.communities.length > 0 ? (
          userData.communities.map(({ name, id, logo }, key) =>
            key < index * 20 && key >= (index - 1) * 20 ? ( // Mapeia os usuários a serem mostrados de acordo com o índice da página
              <CardSecondary
                key={key}
                round
                to="usuario"
                id={id}
                text={name}
                src={logo ? logo : ""}
              />
            ) : null
          )
        ) : (
          <span>O usuário não está em nenhuma comunidade!</span>
        )}
      </CardMain>
    </Layout>
  );
};
