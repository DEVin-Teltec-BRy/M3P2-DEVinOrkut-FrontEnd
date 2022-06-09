import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import ModalComponent from "../../Components/Modal/CreateCommunity";
import CommunitiesList from "../../Components/CommunitiesList";
import Layout from "../../Layout";
import { Lateral } from "../../Components/Lateral";
import { useData } from "../../Context/dataContext";
import { Loading } from "../../Components/Loading";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CardSecondary } from "../../Components/CardSecondary";
import { GET_USER_BY_ID } from "../../Graphql/Querys";

export const CommunityPage = () => {
  const [index, setIndex] = useState(1);
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: id },
  });

  const {
    user: { friends, communities },
  } = useData();

  let friendList = [];
  let communitiesList = [];

  if(id) {
    friendList = data.user.friends;
    communitiesList = data.user.communities
  } else {
    friendList = friends;
    communitiesList = communities;
  }

  return (
    <Layout lateral={<Lateral content={friendList} title="Amigos" />}>
      <CardMain
        title="Comunidades"
        count={communitiesList.length}
        pagination={
          <Pagination
            pageChange={setIndex} // Atualiza o índice da páginação
            nro={communitiesList.length / 20} // Limita o número de usuários por página em 20
            index={index}
          />
        }
      >
        {communitiesList.length > 0 ? (
          communitiesList.map(({ name, id, logo }, key) =>
            key < index * 20 && key >= (index - 1) * 20 ? ( // Mapeia os usuários a serem mostrados de acordo com o índice da página
              <CardSecondary
                key={key}
                round
                to="usuario"
                id={id}
                text={name}
                src={
                  logo.length > 0
                    ? logo[0]
                    : "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"
                }
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

// export const CommunityPage = () => {
//   const { user } = useData();
//   return (
//     <Layout lateral={<Lateral content={user.friends} title="Amigos" />}>
//       <CardMain
//         title="Comunidades"
//         count={user.communities.length}
//         pagination={<Pagination />}
//       >
//         <CommunitiesList />
//         <ModalComponent />
//       </CardMain>
//     </Layout>
//   );
// };
