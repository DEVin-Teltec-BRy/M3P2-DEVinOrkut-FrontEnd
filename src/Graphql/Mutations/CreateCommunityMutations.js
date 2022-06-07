import { gql } from "@apollo/client";

export const CREATE_COMMUNITY = gql`
  mutation CreateCommunity($input: CommunityInput) {
    createCommunity(input: $input) {
      id
      logo
      name
      description
      category
      creation_date
    }
  }
`;
