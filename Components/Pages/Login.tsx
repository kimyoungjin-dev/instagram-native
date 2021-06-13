import React, { useRef } from "react";
import Logo from "../LoginShared/Logo";
import SubmitBtn from "../LoginShared/SubmitBtn";
import Form from "../LoginShared/Form";
import Seperate from "../LoginShared/Seperate";
import FaceBookLogin from "../LoginShared/FaceBookLogin";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import Input from "../LoginShared/Input";
import KeyboardContainer from "../LoginShared/KeyboardContainer";
import { RouterName } from "../RouterName";

export default function Login() {
  const passwordRef = useRef(null);

  return (
    <KeyboardContainer>
      <Logo />

      <Form>
        <Input placeholderText="userName" nextRef={passwordRef} />
        <Input
          placeholderText="Password"
          isPassword={true}
          isLast={true}
          refName={passwordRef}
        />
      </Form>

      <SubmitBtn text="로그인" />

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
