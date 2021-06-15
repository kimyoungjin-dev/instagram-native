import { GestureResponderEvent } from "react-native";
import { createAccountVariables } from "../../__generated__/createAccount";
import { loginVariables } from "../../__generated__/login";

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface SubmitBtnProps {
  text: string;
  loading?: boolean;
  disabled?: boolean | undefined;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export interface MakeSignUpProps {
  text: string;
  colorText: string;
  link: string;
}

export interface LoginProps extends loginVariables {
  result: string;
}

export interface CreateAccountProps extends createAccountVariables {
  result: string;
}

export interface ErrorMessageProps {
  text?: string | undefined;
  errorMargin?: boolean;
}

export interface SplitTextProps {
  text: string | null | undefined;
}

export interface AvatarProps {
  uri?: string | null | undefined;
  isMargin?: boolean;
}

export interface ScreenContainerProps {
  loading: boolean;
  children: React.ReactNode;
}
