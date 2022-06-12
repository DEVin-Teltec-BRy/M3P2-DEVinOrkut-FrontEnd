import { gql } from "@apollo/client";

export const VALIDATE_TOKEN = gql`
  mutation ValidatedToken($token: String!) {
    validatedToken(token: $token) {
      token
    user {
      id
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
        id
        fullName
        profilePicture
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
        profilePicture
      }
    }
    }
  }
`;
