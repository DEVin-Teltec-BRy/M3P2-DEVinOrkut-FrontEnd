import { gql } from "@apollo/client";

export const EDIT_COMMUNITY = gql`
  mutation EditCommunity($communityId: ID!, $input: CommunityInput) {
    editCommunity(community_id: $communityId, input: $input) {
      id
      name
      description
      logo
    }
  }
`;
