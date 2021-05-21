import React from "react";
import { Text, View } from "react-native";

export default function Notification() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Notification</Text>
    </View>
  );
}
