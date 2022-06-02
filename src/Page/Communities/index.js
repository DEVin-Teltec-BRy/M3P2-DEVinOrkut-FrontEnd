import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Pagination } from "../../Components/Pagination";
import CommunitiesList from "../../Components/Modal/GetCommunity";
import ModalComponent from "../../Components/Modal/CreateCommunity";
import Layout from "../../Layout";

export const CommunityPage = () => {
  return (
    <Layout lateral={<Lateral />}>
      <CardMain title="Comunidades" count={1000} pagination={<Pagination />}>
        <CommunitiesList />
        <ModalComponent />
      </CardMain>
    </Layout>
  );
};

export const Lateral = () => {
  return (
    <CardMain title="Amigos" count={2000} toAll="friends">
      {[...Array(8)].map((_, key) => (
        <CardSecondary
          round
          key={key}
          text="Bill Gates"
          src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
        />
      ))}
    </CardMain>
  );
};
