import React, { useRef } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TextInputBase,
  View,
} from "react-native";
import AuthButton from "../Components/Auth/AuthButton";
import AuthLayOut from "../Components/Auth/AuthLayOut";
import Subtitle from "../Components/Auth/Subtitle";
import { Input } from "../Components/Auth/TextInputStyles";
import SwitchBox from "../Components/SwitchBox";
import { useTheme } from "../styles/ChangeMode";
import { AuthProps } from "../utils/AuthParamList";

export default function Login({ navigation }: AuthProps<"Login">) {
  const theme = useTheme();
  const passwordRef = useRef(null);

  const onNext = (name: React.MutableRefObject<any>) => {
    name?.current?.focus();
  };

  const LastInput = () => {
    Alert.alert("확인");
  };

  return (
    <AuthLayOut>
      <SwitchBox />
      <Subtitle text="Login" />
      <KeyboardAvoidingView
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <Input
          placeholder="First Name"
          returnKeyType="next"
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={() => onNext(passwordRef)}
        />

        <Input
          ref={passwordRef}
          placeholder="First Name"
          returnKeyType="next"
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={() => LastInput()}
        />
        <AuthButton disabled={true} onPress={() => null} text="Login" />
      </KeyboardAvoidingView>
    </AuthLayOut>
  );
}
