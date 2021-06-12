import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../RootStack";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

export default function Welcome({ navigation }: Props) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login 으로 이동</Text>
      </TouchableOpacity>
    </View>
  );
}
