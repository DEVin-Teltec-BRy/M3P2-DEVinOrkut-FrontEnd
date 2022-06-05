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
        id
        fullName
        imageUrl
      }
      ... on Community {
        id
        logo
        name
      }
    }
  }
`;
export const GET_USER_BY_ID = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      id
      fullName
      email
      birthDate
      gender
      address
      relationship
      humor
      interests
      aboutMe
      scraps
      fans
      friends {
        id
        fullName
        imageUrl
      }
      testimonial
      profilePicture
      imageUrl
      communities {
        id
        logo
        name
      }
    }
  }
`;
