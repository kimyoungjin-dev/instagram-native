/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeHashtag
// ====================================================

export interface seeHashtag_seeHashtag_photos {
  __typename: "Photo";
  id: number;
  file: string;
  likes: number;
  commentNumber: number;
  isLiked: boolean;
}

export interface seeHashtag_seeHashtag {
  __typename: "Hashtag";
  id: number;
  hashtag: string;
  totalPhotos: number;
  photos: (seeHashtag_seeHashtag_photos | null)[] | null;
}

export interface seeHashtag {
  seeHashtag: seeHashtag_seeHashtag | null;
}

export interface seeHashtagVariables {
  hashtag: string;
}
