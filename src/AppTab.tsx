import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "./AppParamList";
import { Ionicons } from "@expo/vector-icons";
import { HomeStack } from "./HomeStack";
import { SearchStack } from "./SearchStack";

interface AppTabProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTab: React.FC<AppTabProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "ios-information-circle";
          } else if (route.name === "Search") {
            iconName = "ios-list-box";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
    </Tabs.Navigator>
  );
};
