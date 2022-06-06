import React from "react";
import { useQuery } from "@apollo/client";
import { CardSecondary } from "../CardSecondary";
import { GET_COMMUNITIES } from "../../Graphql/Querys/Communities";

const CommunitiesList = () => {
  const { loading, error, data } = useQuery(GET_COMMUNITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {data?.communities &&
        data.communities.map((community) => {
          return (
            <CardSecondary
              key={community.id}
              size="md"
              to="comunidade"
              id={community.id}
              text={community.name}
              src={community.logo}
            />
          );
        })}
    </>
  );
};

export default CommunitiesList;
