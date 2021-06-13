import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";

const SFaceBookLogin = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

const FaceBookLoginText = styled.Text`
  color: ${(props) => props.theme.faceBookLoginTextColor};
  margin-left: 10px;
  font-size: 15px;
`;

export default function FaceBookLogin() {
  return (
    <SFaceBookLogin>
      <FontAwesome name="facebook-square" color="blue" size={20} />
      <FaceBookLoginText>FaceBook으로 로그인</FaceBookLoginText>
    </SFaceBookLogin>
  );
}
