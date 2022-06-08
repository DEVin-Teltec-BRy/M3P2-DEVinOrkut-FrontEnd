import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Lateral } from "../../Components/Lateral";
import { Pagination } from "../../Components/Pagination";
import { useData } from "../../Context/dataContext";
import Layout from "../../Layout";
import { useState } from "react";
import { Loading } from "../../Components/Loading";

export const FriendPage = () => {
  const [index, setIndex] = useState(1);

  const {
    user: { friends, communities },
  } = useData();
  console.log(friends);

  return (
    <Layout lateral={<Lateral content={communities} title="Comunidades" />}>
      <CardMain
        title="Amigos"
        count={friends.length}
        pagination={
          <Pagination
            pageChange={setIndex} // Atualiza o índice da páginação
            nro={friends.length / 20} // Limita o número de usuários por página em 20
          />
        }
      >
        {friends.length > 0 ? (
          friends.map(({ fullName, id, profilePicture }, key) =>
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
          <Loading></Loading>
        )}
      </CardMain>
    </Layout>
  );
};
