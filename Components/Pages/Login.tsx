import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../RootStack";

type Props = StackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: Props) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Sign Up Page 이동</Text>
      </TouchableOpacity>
    </View>
  );
}
