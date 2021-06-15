/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seePhotoComments
// ====================================================

export interface seePhotoComments_seePhotoComments_user {
  __typename: "User";
  id: number;
  username: string;
  avatar: string | null;
}

export interface seePhotoComments_seePhotoComments_photo {
  __typename: "Photo";
  id: number;
  file: string;
  likes: number;
  commentNumber: number;
  isLiked: boolean;
}

export interface seePhotoComments_seePhotoComments {
  __typename: "Comment";
  id: number;
  user: seePhotoComments_seePhotoComments_user;
  photo: seePhotoComments_seePhotoComments_photo;
  payload: string;
  isMine: boolean;
}

export interface seePhotoComments {
  seePhotoComments: (seePhotoComments_seePhotoComments | null)[] | null;
}

export interface seePhotoCommentsVariables {
  id: number;
  lastId?: number | null;
}
