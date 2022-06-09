import { gql } from "@apollo/client";

export const GET_COMMUNITIES = gql`
  query Communities {
    communities {
      id
      logo
      name
      description
      categoryEnum
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
      foruns {
        id
        name
        description
        comments {
          id
          creation_date
          description
          author {
            id
            fullName
            profilePicture
          }
        }
      }
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

export const COMMUNITY_AND_FORUM = gql`
  query CommunityAndForum($communityId: ID!, $forumId: ID!) {
    community(id: $communityId) {
      id
      owner {
        id
      }
      members {
        id
        fullName
        profilePicture
      }
    }
    forum(id: $forumId) {
      name
      comments {
        id
        description
        creation_date
        author {
          id
          fullName
          profilePicture
        }
      }
    }
  }
`;
