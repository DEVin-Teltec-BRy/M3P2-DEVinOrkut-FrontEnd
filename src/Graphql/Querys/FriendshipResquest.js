import { gql } from "@apollo/client";

export const GET_FRIENDSHIP_REQUEST = gql`
    query user($userId: ID!) {
        user(id: $userId) {
            friendRequest {
            id
            fullName
        }
    }
}
`;