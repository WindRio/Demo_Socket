import { useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
} from "react-native";

export default function Login() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text>Màn hình đăng nhập fhjvbhvbfj</Text>
          <Icon size={24} color="black" name="movie" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
