import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductosScreen } from "../../screens/producto";

const Stack = createNativeStackNavigator();

export const Tab1 = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="ProductosScreen"
        component={ProductosScreen} />
    </Stack.Navigator>
  );
};
