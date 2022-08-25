import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SearchScreen } from "../screens/cliente";
import { Tab1 } from "./tabs/Tab1";


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
        name="SearchScreen"
        component={SearchScreen}
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
