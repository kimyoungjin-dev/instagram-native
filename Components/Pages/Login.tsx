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

export default function Login() {
  const [login_mutation, { loading }] = useMutation<login, loginVariables>(
    LOGIN_MUTATION,
    {
      onCompleted: (data) => {
        const {
          login: { ok, error, token },
        } = data;
        if (!ok) {
          setError("result", {
            message: error || undefined,
          });
        }
      },
    }
  );

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm<LoginProps>({ mode: "onChange" });

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
          onChangeText={(value) => setValue("password", value)}
          placeholder="Password"
          placeholderTextColor={reverseModeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          secureTextEntry={true}
          onSubmitEditing={() => handleSubmit(onSubmit)}
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
