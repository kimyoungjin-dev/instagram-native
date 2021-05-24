import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Profile({ navigation, route }: any) {
  useEffect(() => {
    navigation.setOptions({
      title: `${route?.params?.username} Profile`,
    });
  }, [route]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>SomeOne Profile</Text>
    </View>
  );
}
