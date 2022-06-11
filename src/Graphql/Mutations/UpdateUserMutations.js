import { gql } from "@apollo/client/core";

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($user: UserUpdate!) {
    updateUser(input: $user)
  }
`;
