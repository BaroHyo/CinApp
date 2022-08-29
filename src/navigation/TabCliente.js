import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Tab1, Tab2 } from "./tabsCliente";


const Tab = createBottomTabNavigator();

export const TabCliente = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          headerShown: false,
          tabBarLabel: "Clientes",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-multiple"
              color={color}
              size={29} />
          ),
        }} />
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
        }} />
    </Tab.Navigator>
  );
};
