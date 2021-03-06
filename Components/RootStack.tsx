import {
  seeFeed_seeFeed,
  seeFeed_seeFeed_comments,
  seeFeed_seeFeed_user,
} from "../__generated__/seeFeed";

export type RootStackParamList = {
  Welcome: undefined;
  Login: { username: string; password: string } | undefined;
  SignUp: undefined;
  Feed: undefined;
  Search: undefined;
  Notifications: undefined;
  //Profile
  Profile: { username: string };
  Camera: undefined;
  Me: undefined;
  Photo: undefined;

  //likes
  Like: undefined;
  LikesMember: { photoId: number };

  //comments
  Comments: undefined;
  CommentsMember: {
    caption: string | null;
    user: seeFeed_seeFeed_user;
    photoId: seeFeed_seeFeed["id"];
    commentNumber: number;
  };

  Hashtag: { hashtag: string };
};
