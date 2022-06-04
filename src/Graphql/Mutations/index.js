import { gql } from "@apollo/client";

export const SEND_EMAIL = gql`
  mutation SendEmailresetPassword($user: UserPassword) {
    sendEmailresetPassword(user: $user)
  }
`;
export const RESET_PASS = gql`
  mutation ChangePassword($user: NewPassword) {
    changePassword(user: $user)
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        fullName
        email
        profilePicture
        imageUrl
        gender
        friendRequest {
          id
          fullName
          gender
          profilePicture
        }
        communities {
          id
          name
          category
          logo
        }
        friends {
          id
          fullName
          profilePicture
          gender
          profilePicture
          imageUrl
        }
      }
    }
  }
`;
