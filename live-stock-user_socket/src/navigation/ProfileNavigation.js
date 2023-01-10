import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Profile from "../screens/profileScreens/index";
const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile.ProfileScreen} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  );
}
