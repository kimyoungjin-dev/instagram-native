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
