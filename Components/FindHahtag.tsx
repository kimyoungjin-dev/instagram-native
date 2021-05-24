import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { seeFeed_seeFeed } from "../__generated__/seeFeed";

const PayloadText = styled.Text`
  color: gray;
  margin-left: 5px;
`;

const HashtagText = styled.Text`
  color: skyblue;
  margin-left: 5px;
`;

type Props = Pick<seeFeed_seeFeed, "caption">;

export default function FindHahtag({ caption }: Props) {
  const navigation = useNavigation();
  return (
    <PayloadText>
      {caption?.split(" ").map((item, index) =>
        /#[\w]+/.test(item) ? (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Hashtag")}
          >
            <HashtagText>{item} </HashtagText>
          </TouchableOpacity>
        ) : (
          <View key={index}>
            <Text style={{ color: "gray" }}>{item} </Text>
          </View>
        )
      )}
    </PayloadText>
  );
}
