import { useTheme } from "../styles/ChangeMode";
import React, { useEffect, useRef } from "react";
import { Platform, KeyboardAvoidingView, Text } from "react-native";
import AuthButton from "../Components/Auth/AuthButton";
import AuthLayOut from "../Components/Auth/AuthLayOut";
import SwitchBox from "../Components/SwitchBox";
import { Input } from "../Components/Auth/TextInputStyles";
import Subtitle from "../Components/Auth/Subtitle";
import { SubmitHandler, useForm } from "react-hook-form";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import {
  createAccount,
  createAccountVariables,
} from "../__generated__/createAccount";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

export default function CreateAccount({ navigation }: any) {
  const [createAccountMutation, { loading }] = useMutation<
    createAccount,
    createAccountVariables
  >(CREATE_ACCOUNT_MUTATION, {
    onCompleted: (data) => {
      const { username, password } = getValues();
      const {
        createAccount: { ok },
      } = data;
      //createAccount에 성공적이라면 'Login' 페이지로 이동, props : username, password 전달
      if (ok) {
        navigation.navigate("Login", {
          username,
          password,
        });
      }
    },
  });

  const onSubmit: SubmitHandler<createAccountVariables> = (data) => {
    if (!loading) {
      createAccountMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  const { register, handleSubmit, setValue, getValues, watch } =
    useForm<createAccountVariables>();
  const theme = useTheme();
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onNext = (nextOne: React.MutableRefObject<any>) => {
    nextOne?.current?.focus();
  };

  useEffect(() => {
    register("firstName", {
      required: true,
    });
    register("lastName", {
      required: true,
    });
    register("username", {
      required: true,
    });
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
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
          autoCapitalize="none"
          placeholder="First Name"
          returnKeyType="next"
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={() => onNext(lastNameRef)}
          onChangeText={(text) => setValue("firstName", text)}
        />

        <Input
          ref={lastNameRef}
          autoCapitalize="none"
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
          autoCapitalize="none"
          placeholder="Email"
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
          disabled={
            !watch("username") ||
            !watch("email") ||
            !watch("firstName") ||
            !watch("lastName") ||
            !watch("password")
          }
          text="CreateAccount"
          loading={loading}
        />
      </KeyboardAvoidingView>
    </AuthLayOut>
  );
}
