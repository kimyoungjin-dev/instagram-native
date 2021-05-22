import React from "react";
import { Text, View } from "react-native";

export default function Comments() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Comments</Text>
    </View>
  );
}
