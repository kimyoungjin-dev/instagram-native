/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me {
  __typename: "User";
  id: number;
  username: string;
  avatar: string | null;
}

export interface Me {
  me: Me_me | null;
}
