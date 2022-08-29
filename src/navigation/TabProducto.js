import React from "react";
import color from "color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Tab1, Tab2 } from "./tabsProducto";
import { useTheme } from "react-native-paper";
import { Platform } from "react-native";


const Tab = createBottomTabNavigator();

export const TabProducto = () => {

  const theme = useTheme();

  return (
    <Tab.Navigator
      shifting={true}
      activeColor={theme.colors.primary}
      inactiveColor={color(theme.colors.text)
        .alpha(0.6)
        .rgb()
        .string()}
      sceneAnimationEnabled={false}
      screenOptions={{
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          headerShown: false,
          tabBarLabel: "Productos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-text"
              color={color}
              size={29} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: "Buscar",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="magnify"
              color={color}
              size={29} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
