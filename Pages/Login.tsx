import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React, { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform } from "react-native";
import { isLoggedInVar, logUserIn } from "../Components/Apollo";
import AuthButton from "../Components/Auth/AuthButton";
import AuthLayOut from "../Components/Auth/AuthLayOut";
import Subtitle from "../Components/Auth/Subtitle";
import { Input } from "../Components/Auth/TextInputStyles";
import SwitchBox from "../Components/SwitchBox";
import { useTheme } from "../styles/ChangeMode";
import { login, loginVariables } from "../__generated__/login";

const LOGINT_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;

export default function Login({ route: { params } }: any) {
  const { register, handleSubmit, setValue, watch } = useForm<loginVariables>({
    defaultValues: {
      username: params?.username,
      password: params?.password,
    },
  });
  const [loginMutation, { loading }] = useMutation<login, loginVariables>(
    LOGINT_MUTATION,
    {
      onCompleted: async (data) => {
        const {
          login: { ok, token },
        } = data;

        if (ok) {
          await logUserIn(token!);
        }
      },
    }
  );

  const onSubmit: SubmitHandler<loginVariables> = (data) => {
    if (!loading) {
      loginMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  const theme = useTheme();
  const passwordRef = useRef(null);

  const onNext = (value: React.MutableRefObject<any>) => {
    value?.current?.focus();
  };

  useEffect(() => {
    register("username");
    register("password");
  }, [register]);

  watch;
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
          value={watch("username") || ""}
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
          value={watch("password") || ""}
          ref={passwordRef}
          placeholder="password"
          returnKeyType="done"
          secureTextEntry={true}
          placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
          onSubmitEditing={handleSubmit(onSubmit)}
          onChangeText={(text) => {
            setValue("password", text);
          }}
        />
        <AuthButton
          disabled={!watch("username") || !watch("password")}
          onPress={handleSubmit(onSubmit)}
          text="Login"
          loading={loading}
        />
      </KeyboardAvoidingView>
    </AuthLayOut>
  );
}
