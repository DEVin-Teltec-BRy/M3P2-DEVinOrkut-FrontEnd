import { CardMain } from "../../Components/CardMain";
import { Pagination } from "../../Components/Pagination";
import ModalComponent from "../../Components/Modal/CreateCommunity";
import CommunitiesList from "../../Components/CommunitiesList";
import Layout from "../../Layout";
import { Lateral } from "../../Components/Lateral";
import { useData } from "../../Context/dataContext";

const CommunityPage = () => {
  const { user } = useData();
  return (
    <Layout lateral={<Lateral content={user.friends} title="Amigos" />}>
      <CardMain
        title="Comunidades"
        count={user.communities.length}
        pagination={<Pagination />}
      >
        <CommunitiesList />
        <ModalComponent />
      </CardMain>
    </Layout>
  );
};
export default CommunityPage