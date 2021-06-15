/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CacheCommentFragment
// ====================================================

export interface CacheCommentFragment_user {
  __typename: "User";
  username: string;
  avatar: string | null;
}

export interface CacheCommentFragment {
  __typename: "Comment";
  id: number;
  payload: string;
  isMine: boolean;
  createdAt: string;
  user: CacheCommentFragment_user;
}
