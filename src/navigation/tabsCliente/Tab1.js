import React from "react";
import { ClienteScreen, ClientesScreen } from "../../screens/cliente";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const Tab1 = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="ClientesScreen"
        component={ClientesScreen} />
      <Stack.Screen
        name="ClienteScreen"
        component={ClienteScreen} />
    </Stack.Navigator>
  );
};
