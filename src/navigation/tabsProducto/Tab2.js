import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductoScreen } from "../../screens/producto/ProductoScreen";
import { SearchScreen } from "../../screens/producto";

const Stack = createNativeStackNavigator();

export const Tab2 = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "white",
        },
      }}>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen} />
      <Stack.Screen
        name="ProductoScreen"
        component={ProductoScreen} />
    </Stack.Navigator>
  );
};
