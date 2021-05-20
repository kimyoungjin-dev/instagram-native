import { useTheme } from "../styles/ChangeMode";
import React, { useEffect, useRef } from "react";
import { Alert, Platform, KeyboardAvoidingView } from "react-native";
import AuthButton from "../Components/Auth/AuthButton";
import AuthLayOut from "../Components/Auth/AuthLayOut";
import SwitchBox from "../Components/SwitchBox";
import { Input } from "../Components/Auth/TextInputStyles";
import Subtitle from "../Components/Auth/Subtitle";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export default function CreateAccount() {
  const { register, handleSubmit, setValue } = useForm();
  const theme = useTheme();
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onNext = (nextOne: React.MutableRefObject<any>) => {
    nextOne?.current?.focus();
  };

  const onSubmit: SubmitHandler<IProps> = (data) => console.log(data);

  useEffect(() => {
    register("firstName");
    register("lastName");
    register("username");
    register("email");
    register("password");
  }, [register]);

  return (
    <AuthLayOut>
      <SwitchBox />
      <Subtitle text="CreateAccount" />
      <KeyboardAvoidingView
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
      >
        <Input
          placeholder="First Name"
          returnKeyType="next"
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={() => onNext(lastNameRef)}
          onChangeText={(text) => setValue("firstName", text)}
        />

        <Input
          ref={lastNameRef}
          placeholder="Last Name"
          returnKeyType="next"
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={() => onNext(usernameRef)}
          onChangeText={(text) => setValue("lastName", text)}
        />

        <Input
          ref={usernameRef}
          placeholder="User Name"
          autoCapitalize="none"
          returnKeyType="next"
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={() => onNext(emailRef)}
          onChangeText={(text) => setValue("username", text)}
        />

        <Input
          ref={emailRef}
          placeholder="Last Name"
          returnKeyType="next"
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={() => onNext(passwordRef)}
          onChangeText={(text) => setValue("email", text)}
        />

        <Input
          ref={passwordRef}
          placeholder="Password"
          returnKeyType="done"
          secureTextEntry={true}
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={handleSubmit(onSubmit)}
          lastOne={true}
          onChangeText={(text) => setValue("password", text)}
        />

        <AuthButton
          onPress={handleSubmit(onSubmit)}
          disabled={true}
          text="CreateAccount"
        />
      </KeyboardAvoidingView>
    </AuthLayOut>
  );
}
