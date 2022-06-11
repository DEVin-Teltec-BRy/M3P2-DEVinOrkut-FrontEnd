import React from "react";
import { CardSecondary } from "../CardSecondary";

const CommunitiesList = ({communities}) => {
  return (
    <>
      {communities &&
        communities.map((community) => {
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
