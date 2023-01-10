import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Category from "../screens/categoryScreens/index";
const CategoryStack = createNativeStackNavigator();

export default function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Category" component={Category.CategoryScreen} options={{ headerShown: false }}/>
    </CategoryStack.Navigator>
  );
}
