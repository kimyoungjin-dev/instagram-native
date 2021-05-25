/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: NEWCOMMENT
// ====================================================

export interface NEWCOMMENT_user {
  __typename: "User";
  username: string;
  avatar: string | null;
}

export interface NEWCOMMENT {
  __typename: "Comment";
  id: number;
  user: NEWCOMMENT_user;
  payload: string;
  isMine: boolean;
  createdAt: string;
}
