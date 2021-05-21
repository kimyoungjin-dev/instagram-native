import React from "react";
import { ActivityIndicator, View } from "react-native";

interface IProps {
  loading: boolean;
  children: React.ReactNode;
}

export default function ViewContainer({ loading, children }: IProps) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? <ActivityIndicator /> : children}
    </View>
  );
}
