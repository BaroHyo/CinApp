import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductoScreen, ProductosScreen, SearchScreen } from "../screens/producto";

const Stack = createNativeStackNavigator();

export const ProductoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="ProductosScreen"
        component={ProductosScreen} />
      <Stack.Screen
        name="ProductoScreen"
        component={ProductoScreen} />
      <Stack.Screen
        name="SearchProductoScreen"
        component={SearchScreen} />
    </Stack.Navigator>
  );
};
