import React, { useEffect, useRef } from "react";
import Logo from "../LoginShared/Logo";
import SubmitBtn from "../LoginShared/SubmitBtn";
import Form from "../LoginShared/Form";
import Seperate from "../LoginShared/Seperate";
import FaceBookLogin from "../LoginShared/FaceBookLogin";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import KeyboardContainer from "../LoginShared/KeyboardContainer";
import { RouterName } from "../RouterName";
import { onNext, reverseModeColor } from "../Shared/SharedFunction";
import { TextInput } from "../LoginShared/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../Fragment";
import { login, loginVariables } from "../../__generated__/login";
import { LoginProps } from "../Shared/InterFace";
import ErrorMessage from "../LoginShared/ErrorMessage";
import { LoginNavProps } from "../../Navigation/NavigationProps";
import { isLoggedInVar, logUserIn } from "../../Apollo";

export default function Login({ route: { params } }: LoginNavProps) {
  const onCompleted = (data: login) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      setError("result", {
        message: error || undefined,
      });
    }
    if (ok) {
      logUserIn(token);
    }
  };
  const [login_mutation, { loading }] = useMutation<login, loginVariables>(
    LOGIN_MUTATION,
    {
      onCompleted,
    }
  );
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm<LoginProps>({
    mode: "onChange",
    defaultValues: {
      username: params?.username || "",
      password: params?.password || "",
    },
  });

  useEffect(() => {
    register("username", {
      required: "Username is required",
    });
    register("password", {
      required: "Password is required",
    });
  }, [register]);

  const onSubmit: SubmitHandler<loginVariables> = (data) => {
    if (loading) {
      return;
    }

    login_mutation({
      variables: {
        ...data,
      },
    });
  };

  const passwordRef = useRef(null);
  return (
    <KeyboardContainer>
      <Logo />

      <Form>
        <TextInput
          value={watch("username")}
          onChangeText={(value) => setValue("username", value)}
          placeholder="UserName"
          placeholderTextColor={reverseModeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => onNext(passwordRef)}
        />
        <ErrorMessage text={errors.username?.message || undefined} />

        <TextInput
          value={watch("password")}
          onChangeText={(value) => setValue("password", value)}
          placeholder="Password"
          placeholderTextColor={reverseModeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          secureTextEntry={true}
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <ErrorMessage text={errors.password?.message || undefined} />
      </Form>

      <SubmitBtn
        text="로그인"
        onPress={handleSubmit(onSubmit)}
        loading={loading}
        disabled={!watch("username") || !watch("password")}
      />
      <ErrorMessage
        text={errors?.result?.message || undefined}
        errorMargin={true}
      />

      <Seperate />

      <FaceBookLogin />

      <MakeSignUpText
        link={RouterName.SignUp}
        text="계정이 없으신가요?"
        colorText="가입하기"
      />
    </KeyboardContainer>
  );
}
