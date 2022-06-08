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
      categoryEnum
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
  query Categories {
    categories {
      id
      name
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
`;
