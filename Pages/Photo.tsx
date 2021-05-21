import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Photo({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ color: "white" }}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
