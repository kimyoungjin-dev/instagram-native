import gql from "graphql-tag";

export const PHOTO_FRAGMENT = gql`
  fragment PhotoFragment on Photo {
    id
    file
    likes
    commentNumber
    isLiked
  }
`;

//오타주의
export const COMMENT_FRAGMENT = gql`
  fragment CommentFragment on Comment {
    id
    user {
      username
      avatar
    }
    payload
    isMine
    createdAt
  }
`;
