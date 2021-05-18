import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { AuthProps } from "../utils/AuthParamList";

export default function Welcome({ navigation, route }: AuthProps<"Welcome">) {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <View>
          <Text>go to the Create Account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
