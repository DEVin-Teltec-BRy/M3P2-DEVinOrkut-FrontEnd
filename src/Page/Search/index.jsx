import { UserLayout } from "../../Layout/User";
import {useParams } from "react-router-dom";
import { CardMain } from "../../Components/CardMain";
import { CardSecondary} from "../../Components/CardSecondary";

export const SearchPage = () => {
  const { param } = useParams();
  return (
    <UserLayout centerCol={9}>
      <CardMain title={`Resultado para ${param}: `} count={10}>
          {[...Array(10)].map((item,key)=>(
              <CardSecondary key={key} text='usuario' src='https://thumbs.dreamstime.com/b/o-homem-irado-na-camisa-vermelha-rasga-folha-de-papel-6582601.jpg'/>
          ))}
      </CardMain>
    </UserLayout>
  );
};
