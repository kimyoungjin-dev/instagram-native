import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LoginProps } from "../../Navigation/NavigationProps";
import { RootStackParamList } from "../RootStack";

export default function Login({ navigation }: LoginProps) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Sign Up Page 이동</Text>
      </TouchableOpacity>
    </View>
  );
}
