import { gql } from "@apollo/client";

export const CREATE_FORUM = gql`
  mutation CreateForum($input: ForumInput) {
    createForum(input: $input) {
      id
    }
  }
`;