import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { SignUpProps } from "../../Navigation/NavigationProps";

export default function SignUp({ navigation }: SignUpProps) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Text>Welcome Page 이동</Text>
      </TouchableOpacity>
    </View>
  );
}
