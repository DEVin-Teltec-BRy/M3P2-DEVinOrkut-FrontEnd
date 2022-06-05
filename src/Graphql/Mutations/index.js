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
      birthDate
      cpf
      email
      fullName
      gender
      postal
      city
      state
      address
      number
      complement
      district
      reference
      relationship
      humor
      interests
      aboutMe
      scraps
      testimonial
      trusty
      cool
      sexy
      fans
      imageUrl
      profilePicture
      friendRequest {
        fullName
      }
      communities {
        id
        name
        logo
      }
      friends {
        id
        fullName
        imageUrl
      }
    }
    }
  }
`;
