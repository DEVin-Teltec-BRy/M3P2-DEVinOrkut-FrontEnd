import { gql } from "@apollo/client";

export const GET_COMMUNITIES = gql`
  query Communities {
    communities {
      id
      logo
      name
      description
      category
    }
  }
`;

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

export const COMMUNITY_DETAILS = gql`
  query Community($communityId: ID!) {
    community(id: $communityId) {
      id
      logo
      name
      description
      category
      creation_date
      members {
        id
        fullName
      }
      owner {
        id
        fullName
      }
      # foruns {
      #   name
      #   description
      #   comments {
      #     id
      #     creation_date
      #     description
      #   }
      # }
    }
  }
`;


export const CATEGORY_ENUM = gql`
  query {
    __type(name: "Category") {
      name
      enumValues {
        name
      }
    }
  }
`;


export const COMMUNITY_MEMBERS = gql`
  query Community($communityId: ID!) {
    community(id: $communityId) {
      id
      name
      members {
        id
        fullName
      }
      owner {
        id
        fullName
      }
    }
  }
`
