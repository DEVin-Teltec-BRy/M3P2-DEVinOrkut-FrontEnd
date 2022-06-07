import { gql } from "@apollo/client";

export const GET_COMMUNITIES = gql`
  query Communities {
    communities {
      id
      logo
      name
      description
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
      owner {
        id
        fullName
      }
      foruns {
        id
        name
        description
        comments {
          id
          creation_date
          description
        }
      }
    }
  }
`;

export const CATEGORY_ENUM = gql`
  query enum {
    __type(name: "Category") {
      enumValues {
        name
      }
    }
  }
`;
