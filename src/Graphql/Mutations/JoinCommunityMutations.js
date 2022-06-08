import { gql } from "@apollo/client";

export const JOIN_COMMUNITY = gql`
  mutation JoinCommunity($communityId: ID) {
    joinCommunity(community_id: $communityId) {
      id
      logo
      name
      description
      categoryEnum
      creation_date
    }
  }
`;
