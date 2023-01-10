import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as News from "../screens/newsScreens/index";
const NewsStack = createNativeStackNavigator();

export default function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name="News" component={News.NewsScreen} options={{ headerShown: false }}/>
    </NewsStack.Navigator>
  );
}
