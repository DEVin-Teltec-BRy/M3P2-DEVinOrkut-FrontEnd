import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Lateral } from "../../Components/Lateral";
import { Pagination } from "../../Components/Pagination";
import { useData } from "../../Context/dataContext";
import Layout from "../../Layout";
import profileDefaultM from "../../Assets/images/default-m.png";
import profileDefaultF from "../../Assets/images/default-f.png";



export const FriendPage = () => {
  const { user: { friends, communities } } = useData();

  return (
    <Layout lateral={<Lateral content={communities} title="Comunidades"/>}>
      <CardMain title="Amigos" count={friends.length} pagination={<Pagination />}>
        {friends.map((friend, key) => (
          <CardSecondary
            friend={friend}
            key={key}
            round
            text={friend.fullName}
            src={friend.profilePicture[0] || friend.gender.substr(1).toUpperCase() === 'F' ? profileDefaultF : profileDefaultM}
          />
        ))}
      </CardMain>
    </Layout>
  );
};