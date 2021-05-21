import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../Components/Auth/AuthButton";
import AuthLayOut from "../Components/Auth/AuthLayOut";
import SwitchBox from "../Components/SwitchBox";
import { useTheme } from "../styles/ChangeMode";
import { AuthProps } from "../utils/AuthParamList";

//프로필 사진 , 유저네임 추가

const Another = styled.Text`
  color: ${(props) => props.theme.loginBtnColor};
`;

const CreateAcount = styled.View`
  position: absolute;
  bottom: 100px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export default function Welcome({ navigation }: AuthProps<"Welcome">) {
  const theme = useTheme();
  const goToLogin = () => navigation.navigate("Login");
  const goToCreateAccount = () => navigation.navigate("CreateAccount");

  return (
    <AuthLayOut>
      <SwitchBox />
      <AuthButton onPress={goToLogin} text="로그인" disabled={false} />

      <TouchableOpacity style={{ marginTop: 20 }} onPress={goToLogin}>
        <Another>다른 계정으로 로그인</Another>
      </TouchableOpacity>

      <CreateAcount>
        <Text style={{ color: theme.mode === "dark" ? "white" : "black" }}>
          instagram에 처음 오셨나요?
        </Text>
        <TouchableOpacity onPress={goToCreateAccount}>
          <Text
            style={{
              color: "red",
              marginLeft: 5,
              fontSize: 16,
            }}
          >
            가입하기
          </Text>
        </TouchableOpacity>
      </CreateAcount>
    </AuthLayOut>
  );
}
