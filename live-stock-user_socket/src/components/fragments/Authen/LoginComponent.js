import React from "react";
import { View, Pressable, Text } from "react-native";

export default function LoginComponent(props) {
  const { navigation } = props;
  const loginHandeler = () => {
    navigation.navigate( "Home")
  };
  return (
    <View>
      <Pressable onPress={() => loginHandeler()}>
        <Text>Đăng nhập</Text>
      </Pressable>
    </View>
  );
}
