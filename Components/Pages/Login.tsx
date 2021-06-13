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
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("username", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);

  const onSubmit = (data: any) => {
    console.log(data);
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
      </Form>

      <SubmitBtn text="로그인" onPress={handleSubmit(onSubmit)} />

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
