import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Lateral } from "../../Components/Lateral";
import { Pagination } from "../../Components/Pagination";
import { useData } from "../../Context/dataContext";
import Layout from "../../Layout";


export const FriendPage = () => {
  const { user: { friends, communities } } = useData();

  return (
    <Layout lateral={<Lateral content={communities} title="Comunidades"/>}>
      <CardMain title="Amigos" count={friends.length} pagination={<Pagination />}>
        {friends.map(({fullName,id}, key) => (
          <CardSecondary
            key={key}
            round
            to='usuario'
            id={id}
            text={fullName}
            src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
          />
        ))}
      </CardMain>
    </Layout>
  );
};