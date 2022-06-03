import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import Layout from "../../Layout";

import { CardSecondary } from "../../Components/CardSecondary";
import { SEARCH_USER_OR_COMMUNITIES } from "../../Graphql/Querys";
import { Pagination } from "../../Components/Pagination";
import { InputSearch } from "../../Components/InputSearch";
import { LateralProfile } from "../Profile/Lateral";
import { BoxSearch, Search } from "./search.styled";

export const SearchPage = () => {
  const [listResult, setListResult] = useState({
    listUser: [],
    listComunities: [],
  });

  const { listUser, listComunities } = listResult;
  const [getResults, { data, loading, error }] = useLazyQuery(
    SEARCH_USER_OR_COMMUNITIES
  );

  const refreshResult = (paramValue) => {
    getResults({ variables: { param: paramValue } });
    setListResult((prev) => ({ ...prev, param: paramValue }));
  };
  useEffect(() => {
    if (data?.searchParam) {
      const { searchParam } = data;
      let listUser = [];
      let listComunities = [];
      searchParam.forEach((item, i) => {
        item.__typename === "User"
          ? listUser.push(item)
          : listComunities.push(item);
      });
      setListResult({ listUser, listComunities });
    }
  }, [data]);

  return (
    <Layout lateral={<LateralProfile />}>
      <Search count={listResult?.length} pagination={<Pagination />} column>
        <div>
          <h4>Buscar</h4>
          <InputSearch setParam={refreshResult} />
        </div>
        <BoxSearch>
          <h5>Perssoas</h5>
          <div>
            {listUser &&
              listUser.map(({ fullName, logo }, key) => (
                <CardSecondary
                  key={key}
                  text={fullName}
                  src={
                    logo
                      ? logo
                      : "https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
                  }
                />
              ))}
          </div>
        </BoxSearch>
        <BoxSearch>
          <h5>Comunidades</h5>
          <div>
            {listComunities &&
              listComunities.map(({ name, logo }, key) => (
                <CardSecondary
                  key={key}
                  size="md"
                  text={name}
                  src={
                    logo
                      ? logo
                      : "https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
                  }
                />
              ))}
          </div>
        </BoxSearch>
      </Search>
    </Layout>
  );
};
