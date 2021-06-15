import { RouteProp } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/RootStack";

export type LoginScreenNav = StackScreenProps<RootStackParamList, "Login">;
export type LoginRouteProp = RouteProp<RootStackParamList, "Login">;
export type LoginNavProps = {
  navigation: LoginScreenNav;
  route: LoginRouteProp;
};
//
export type SignUpNavProps = StackScreenProps<RootStackParamList, "SignUp">;
export type WelcomeNavProps = StackScreenProps<RootStackParamList, "Welcome">;

//Tabs
export type FeedNavProps = StackScreenProps<RootStackParamList, "Feed">;
export type SearchNavProps = StackScreenProps<RootStackParamList, "Search">;
export type NotificationsNavProps = StackScreenProps<
  RootStackParamList,
  "Notifications"
>;
export type MeNavProps = StackScreenProps<RootStackParamList, "Me">;

//shared Stack
export type PhotoNavProps = StackScreenProps<RootStackParamList, "Photo">;
export type ProfileNavProps = StackScreenProps<RootStackParamList, "Profile">;

//compoents//
//(likes)
export type LikeNavProps = StackScreenProps<RootStackParamList, "Like">;

//(LikesMember)
type LikesMemberScreenNav = StackScreenProps<RootStackParamList, "LikesMember">;
type LikesMemberRouteProp = RouteProp<RootStackParamList, "LikesMember">;
export type LikesMemberNavProps = {
  navigation: LikesMemberScreenNav;
  route: LikesMemberRouteProp;
};

//(CommentsCommentsMember)
type CommentsMemberScreenNav = StackScreenProps<
  RootStackParamList,
  "CommentsMember"
>;
type CommentsMemberRouteProp = RouteProp<RootStackParamList, "CommentsMember">;
export type CommentsMemberNavProps = {
  navigation: CommentsMemberScreenNav;
  route: CommentsMemberRouteProp;
};
