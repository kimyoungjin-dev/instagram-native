import gql from "graphql-tag";

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    username
    avatar
    isMe
    isFollowing
    id
  }
`;

export const PHOTO_FRAGMENT = gql`
  fragment PhotoFragment on Photo {
    id
    file
    likes
    commentNumber
    isLiked
  }
`;

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

export const NEWCOMMENT = gql`
  fragment NEWCOMMENT on Comment {
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
  query seeFeed($offset: Int!) {
    seeFeed(offset: $offset) {
      ...PhotoFragment
      id
      user {
        id
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

//toggleLikeMutation
export const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

//User Query
export const LIKES_QUERY = gql`
  query seePhotoLikes($id: Int!) {
    seePhotoLikes(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const ME_QUERY = gql`
  query Me {
    me {
      id
      username
      avatar
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
      id
      error
    }
  }
`;

export const CREAT_COMMENT_MUTATION = gql`
  mutation createComment($photoId: Int!, $payload: String!) {
    createComment(photoId: $photoId, payload: $payload) {
      ok
      id
      error
    }
  }
`;
