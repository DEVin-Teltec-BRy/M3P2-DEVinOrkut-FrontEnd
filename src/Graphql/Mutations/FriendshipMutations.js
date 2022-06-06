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
      friendRequest {
        id
        fullName
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation RemoveFriendship($loggedUserId: ID!, $removeFriendshipId: ID!) {
    removeFriendship(
      loggedUserId: $loggedUserId
      removeFriendshipId: $removeFriendshipId
    ) {
      friends {
        id
        fullName
      }
    }
  }
`;

export const REQUEST_FRIENDSHIP = gql`
  mutation RequestFriendship($senderId: ID!, $requestedId: ID!) {
    requestFriendship(senderId: $senderId, requestedId: $requestedId) {
      friendRequest {
        id
        fullName
      }
    }
  }
`;
