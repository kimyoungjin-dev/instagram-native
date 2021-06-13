import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/RootStack";

export type WelcomeNavProps = StackScreenProps<RootStackParamList, "Welcome">;
export type LoginNavProps = StackScreenProps<RootStackParamList, "Login">;
export type SignUpNavProps = StackScreenProps<RootStackParamList, "SignUp">;
