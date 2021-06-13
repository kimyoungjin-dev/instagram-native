import { GestureResponderEvent } from "react-native";

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface SubmitBtnProps {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export interface MakeSignUpProps {
  text: string;
  colorText: string;
  link: string;
}
