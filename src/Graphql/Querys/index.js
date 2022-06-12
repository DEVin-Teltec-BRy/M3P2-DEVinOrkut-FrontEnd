import { gql } from '@apollo/client';

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
        profilePicture
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
      city
      state
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
        profilePicture
      }
      friendRequest {
        id
        fullName
        profilePicture
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

export const GET_FRIENDS = gql`
query Results($pagination: PaginationInput) {
  getFriends(pagination: $pagination) {
    results {
      id
      fullName
      profilePicture
    }
    pagination {
      currentPage
      nextPage
      prevPage
      count
      totalPages
    }
  }
}
`