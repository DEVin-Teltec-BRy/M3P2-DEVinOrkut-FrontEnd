import { gql } from '@apollo/client/core';

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($user: UserInput!) {
    createUser(user: $user) {
      token
    }
  }
`;
