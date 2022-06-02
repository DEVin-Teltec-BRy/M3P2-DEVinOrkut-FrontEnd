import { gql } from "@apollo/client";


export const ACCEPT_FRIENDSHIP_REQUEST = gql`
  mutation acceptRequestFriendship(
    $loggedUserId: ID!
    $acceptFriendshipId: ID!
  ) {
    acceptRequest(
      loggedUserId: $loggedUserId
      acceptFriendshipId: $acceptFriendshipId
    ) {
      id
      friends {
        id
        fullName
      }
      friendRequest {
        id
        fullName
      }
    }
  }
`;

export const REJECT_FRIENDSHIP_REQUEST = gql`
  mutation DeclineFriendshipRequest(
    $loggedUserId: ID!
    $declineFriendshipId: ID!
  ) {
    refuseFriendship(
      loggedUserId: $loggedUserId
      declineFriendshipId: $declineFriendshipId
    ) {
      id
      friendRequest
    }
  }
`;
