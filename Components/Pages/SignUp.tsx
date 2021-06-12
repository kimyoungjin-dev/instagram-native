import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { RootStackParamList } from "../RootStack";

type Props = StackScreenProps<RootStackParamList, "SignUp">;

export default function SignUp({ navigation }: Props) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Text>Welcome Page 이동</Text>
      </TouchableOpacity>
    </View>
  );
}
