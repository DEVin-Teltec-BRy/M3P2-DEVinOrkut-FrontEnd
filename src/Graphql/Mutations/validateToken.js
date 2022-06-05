import { gql } from "@apollo/client";

export const VALIDATE_TOKEN = gql`
  mutation ValidatedToken($token: String!) {
    validatedToken(token: $token) {
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
        name
        logo
      }
      friends {
        fullName
        imageUrl
      }
    }
    }
  }
`;
