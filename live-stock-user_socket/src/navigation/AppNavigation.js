import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AssetNavigation from "./AssetNavigation";
import CategoryNavigation from "./CategoryNavigation";
import HomeStackScreen from "./HomeNavigation";
import NewsNavigation from "./NewsNavigation";
import ProfileStackScreen from "./ProfileNavigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarShowLabel: false,
        initialRouterName: "CategoryScreen",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#444444",
          paddingTop: 15,
          height: 75,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                name="home"
                size={30}
                color={focused ? "#7BA990" : "#ffffff"}
              />
            </>
          ),
        }}
      />

      <Tab.Screen
        name="CategoryScreen"
        component={CategoryNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                name="format-list-text"
                size={30}
                color={focused ? "#7BA990" : "#ffffff"}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="NewsScreen"
        component={NewsNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                name="newspaper-variant-multiple-outline"
                size={30}
                color={focused ? "#7BA990" : "#ffffff"}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="AssetScreen"
        component={AssetNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                name="chart-donut-variant"
                size={30}
                color={focused ? "#7BA990" : "#ffffff"}
              />
            </>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                name="account"
                size={30}
                color={focused ? "#7BA990" : "#ffffff"}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
