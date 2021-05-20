import React, { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform } from "react-native";
import AuthButton from "../Components/Auth/AuthButton";
import AuthLayOut from "../Components/Auth/AuthLayOut";
import Subtitle from "../Components/Auth/Subtitle";
import { Input } from "../Components/Auth/TextInputStyles";
import SwitchBox from "../Components/SwitchBox";
import { useTheme } from "../styles/ChangeMode";

interface IProps {
  username: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, setValue } = useForm();

  const theme = useTheme();
  const passwordRef = useRef(null);

  const onNext = (value: React.MutableRefObject<any>) => {
    value?.current?.focus();
  };

  const onSubmit: SubmitHandler<IProps> = (data) => console.log(data);

  useEffect(() => {
    register("username");
    register("password");
  }, [register]);

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
          placeholder="User Name"
          returnKeyType="next"
          autoCapitalize="none"
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={() => onNext(passwordRef)}
          onChangeText={(text) => {
            setValue("username", text);
          }}
        />

        <Input
          ref={passwordRef}
          placeholder="password"
          returnKeyType="done"
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={handleSubmit(onSubmit)}
          onChangeText={(text) => {
            setValue("password", text);
          }}
        />
        <AuthButton
          disabled={true}
          onPress={handleSubmit(onSubmit)}
          text="Login"
          loading={true}
        />
      </KeyboardAvoidingView>
    </AuthLayOut>
  );
}
