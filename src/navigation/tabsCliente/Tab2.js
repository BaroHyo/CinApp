import React from "react";
import { ClienteScreen, SearchScreen } from "../../screens/cliente";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
        name="ClienteScreen"
        component={ClienteScreen} />
    </Stack.Navigator>
  );
};
