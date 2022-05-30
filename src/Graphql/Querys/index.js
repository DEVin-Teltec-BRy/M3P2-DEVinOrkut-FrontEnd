import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetUsers {
    users {
      id
      fullName
    }
  }
`;

export const SEARCH_USER_OR_COMMUNITIES = gql`
  query GetUserOrCommunities($param: String) {
    searchParam(param: $param) {
      ... on User {
        fullName
      }
      ... on Community {
        logo
        name
      }
    }
  }
`;
