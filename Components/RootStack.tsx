import { loginVariables } from "../__generated__/login";
import {
  seeFeed_seeFeed,
  seeFeed_seeFeed_comments,
  seeFeed_seeFeed_user,
} from "../__generated__/seeFeed";
import { LikeProps } from "./Feed/Like/Like";

export type RootStackParamList = {
  Welcome: undefined;
  Login: loginVariables;
  SignUp: undefined;
  Feed: undefined;
  Search: undefined;
  Notifications: undefined;
  Profile: undefined;
  Camera: undefined;
  Me: undefined;
  Photo: undefined;

  Like: undefined;
  LikesMember: { photoId: number };

  Comments: undefined;
  CommentsMember: {
    comments: (seeFeed_seeFeed_comments | null)[] | null;
    caption: string | null;
    user: seeFeed_seeFeed_user;
    photoId: seeFeed_seeFeed["id"];
    commentNumber: number;
  };
};
