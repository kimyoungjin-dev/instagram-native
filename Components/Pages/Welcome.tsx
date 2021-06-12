import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../RootStack";
import styled from "styled-components/native";
import { defaultBox } from "../Shared/SharedStyles";
import { TouchableOpacity } from "react-native";
import DarkModeSwitch from "../Shared/DarkModeSwitch";
import SubmitBtn from "../LoginShared/SubmitBtn";
import { modeColor } from "../Shared/SharedFunction";

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

const SignUp = styled.View`
  flex-direction: row;
`;

const SignUpText = styled.Text`
  color: ${(props) => props.theme.bgColor};
  margin-left: 8px;
  font-size: 16px;
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
        style={{ tintColor: modeColor() }}
      />

      <SubmitBtn text="로그인" routerName="Login" />

      <SignUp>
        <FirstVisit>instagram에 처음 오셨나요?</FirstVisit>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <SignUpText>가입하기</SignUpText>
        </TouchableOpacity>
      </SignUp>
    </Container>
  );
}
