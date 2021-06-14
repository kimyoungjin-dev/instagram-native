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
