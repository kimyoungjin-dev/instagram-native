import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/RootStack";

export type WelcomeProps = StackScreenProps<RootStackParamList, "Welcome">;
export type LoginProps = StackScreenProps<RootStackParamList, "Login">;
export type SignUpProps = StackScreenProps<RootStackParamList, "SignUp">;
