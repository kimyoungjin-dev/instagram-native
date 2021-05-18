import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AuthProps } from "../utils/AuthParamList";

export default function Login({ navigation }: AuthProps<"Login">) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>go to CreateAccount</Text>
      </TouchableOpacity>
    </View>
  );
}
