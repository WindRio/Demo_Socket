import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import * as authen from "../screens/authenScreen"

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={authen.LoginScreen}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
