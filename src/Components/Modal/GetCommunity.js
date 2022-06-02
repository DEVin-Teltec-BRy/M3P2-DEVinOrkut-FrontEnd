import React from "react";
import { gql, useQuery } from "@apollo/client";
import { CardSecondary } from "../CardSecondary";

export const GET_COMMUNITIES = gql`
  query Communities {
    communities {
      id
      logo
      name
      description
      category
    }
  }
`;
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
              text={community.name}
              src={community.logo}
            />
          );
        })}
    </>
  );
};

export default CommunitiesList;