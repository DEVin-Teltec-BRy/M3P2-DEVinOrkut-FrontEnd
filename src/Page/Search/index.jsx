import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { UserLayout } from "../../Layout/User";
import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { SEARCH_USER_OR_COMMUNITIES } from "../../Graphql/Querys";
import { useEffect, useState } from "react";
import { Pagination } from "../../Components/Pagination";

export const SearchPage = () => {
  const { param } = useParams();
  const { loading, error, data } = useQuery(SEARCH_USER_OR_COMMUNITIES, {
    variables: { param },
  });
  const [listResult, setListResult] = useState([]);

  useEffect(() => {
    if (data) {
      const { searchParam } = data;
      console.log(searchParam);
      setListResult(searchParam);
    }
  }, [data]);

  return (
    <UserLayout centerCol={9} >
      <CardMain title={`Resultado para ${param}: `} count={listResult?.length} pagination={<Pagination/>}>
        {listResult &&
          listResult.map(({ __typename, fullName, name,logo }, key) => (
            <CardSecondary
              key={key}
              round={__typename === "Community" ? null : true}
              size={__typename === "Community" ? "md" : null}
              text={__typename === "Community" ? name : fullName}
              src={logo ? logo :"https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg" }
            />
          ))}
      </CardMain>
    </UserLayout>
  );
};
