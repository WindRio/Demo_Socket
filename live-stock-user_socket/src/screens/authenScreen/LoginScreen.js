import { StyleSheet, View } from "react-native";
import React from "react";
import Login from "../../components/fragments/Authen/LoginComponent";
export default function LoginScreen(props) {
  return (
    <View>
      <Login {...props} />
    </View>
  );
}

const styles = StyleSheet.create({});
