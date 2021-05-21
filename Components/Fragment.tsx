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

//seeFeed
export const FEED_QUERY = gql`
  query seeFeed($page: Int!) {
    seeFeed(page: $page) {
      ...PhotoFragment
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      commentNumber
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
      isLiked
    }
  }
  ${COMMENT_FRAGMENT}
  ${PHOTO_FRAGMENT}
`;