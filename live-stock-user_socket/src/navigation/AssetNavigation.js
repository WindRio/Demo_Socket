import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Asset from "../screens/assetScreens/index";
const AssetStack = createNativeStackNavigator();

export default function AssetStackScreen() {
  return (
    <AssetStack.Navigator>
      <AssetStack.Screen name="Asset" component={Asset.AssetScreen}  options={{ headerShown: false }}/>
    </AssetStack.Navigator>
  );
}
