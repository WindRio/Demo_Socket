import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as homes from "../screens/homeScreens/index";
import * as news from "../screens/newsScreens/index";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen(props) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={homes.HomeScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="News" component={news.NewsScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="DetailNews" component={news.DetailNewsScreen} options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
}
