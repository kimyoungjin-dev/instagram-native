/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentFragment
// ====================================================

export interface CommentFragment_user {
  __typename: "User";
  username: string;
  avatar: string | null;
}

export interface CommentFragment {
  __typename: "Comment";
  id: number;
  user: CommentFragment_user;
  payload: string;
  isMine: boolean;
  createdAt: string;
}
