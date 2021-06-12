import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../RootStack";
import styled from "styled-components/native";
import { defaultBox } from "../Shared/SharedStyles";
import { Text, TouchableOpacity, View } from "react-native";
import DarkModeSwitch from "../Shared/DarkModeSwitch";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
  padding: 0px 20px;
`;

const DarkModeBox = styled.View`
  position: absolute;
  top: 100px;
  right: 30px;
`;

const Logo = styled.Image`
  width: 100%;
  height: 120px;
`;

const Login = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: blue;
  padding: 10px 0px;
  width: 100%;
  margin-bottom: 30px;
`;

const LoginText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SignUpMessage = styled.View`
  flex-direction: row;
`;

const SignUpText = styled.Text`
  color: ${(props) => props.theme.bgColor};
  margin-left: 8px;
`;

const FirstVisit = styled.Text`
  color: ${(props) => props.theme.bgColor};
`;

export default function Welcome({ navigation }: Props) {
  return (
    <Container>
      <DarkModeBox>
        <DarkModeSwitch />
      </DarkModeBox>
      <Logo
        resizeMode="center"
        source={require("../../assets/instagram_logo.png")}
      />
      <Login>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <LoginText>로그인</LoginText>
        </TouchableOpacity>
      </Login>

      <SignUpMessage>
        <FirstVisit>instagram에 처음 오셨나요?</FirstVisit>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <SignUpText>가입하기</SignUpText>
        </TouchableOpacity>
      </SignUpMessage>
    </Container>
  );
}
