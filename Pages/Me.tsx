import React, { useEffect } from "react";
import { Text, View } from "react-native";
import useMe from "../Components/useMe";

export default function Me({ navigation, route }: any) {
  const { data } = useMe();
  useEffect(() => {
    navigation.setOptions({
      title: `${data?.me?.username} Profile`,
    });
  }, [route]);

  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Me</Text>
    </View>
  );
}
