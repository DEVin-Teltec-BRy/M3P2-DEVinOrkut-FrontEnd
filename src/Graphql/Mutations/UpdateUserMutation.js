import { gql } from '@apollo/client/core';

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($user: UserInput!) {
    createUser(user: $user) {
      token
    }
  }
`;
