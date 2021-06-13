import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MakeSignUpProps } from "../Shared/InterFace";

const SignUp = styled.View`
  flex-direction: row;
`;

const SignUpText = styled.Text`
  color: ${(props) => props.theme.bgColor};
  margin-left: 8px;
  font-size: 15px;
  font-weight: bold;
`;

const FirstVisit = styled.Text`
  color: ${(props) => props.theme.bgColor};
  font-size: 14px;
`;

export default function MakeSignUpText({
  text,
  colorText,
  link,
}: MakeSignUpProps) {
  const navigation = useNavigation();
  return (
    <SignUp>
      <FirstVisit>{text}</FirstVisit>
      <TouchableOpacity onPress={() => navigation.navigate(`${link}`)}>
        <SignUpText>{colorText}</SignUpText>
      </TouchableOpacity>
    </SignUp>
  );
}
