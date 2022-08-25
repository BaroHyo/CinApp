import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ClientesScreen from "../screens/ClientesScreen";
import { SearchScreen } from "../screens/SearchScreen";


const Tab = createBottomTabNavigator();

export const TabCliente = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ClientesScreen"
                  component={ClientesScreen}
                  options={{
                    headerShown: false,
                    tabBarLabel: "Clientes",
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account-multiple" color={color} size={29} />
                    ),
                  }} />
      <Tab.Screen name="SearchScreen"
                  component={SearchScreen}
                  options={{
                    tabBarLabel: "Buscar",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="magnify" color={color} size={29} />
                    ),
                  }} />
    </Tab.Navigator>
  );
};
