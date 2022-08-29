import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthContext";
import { TabCliente } from "./TabCliente";
import { TabProducto } from "./TabProducto";
import { ProductoScreen } from "../screens/producto";


const Stack = createNativeStackNavigator();

const RootNavigation = () => {

  const { status } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {

        (status !== "authenticated")
          ?
          (<>
            <Stack.Screen
              name="LoginScreen"
              options={{
                headerShown: false,
              }}
              component={LoginScreen} />
          </>) : (
            <>
              <Stack.Group>
                <Stack.Screen
                  name="HomeScreen"
                  options={{
                    headerShown: false,
                  }}
                  component={HomeScreen} />
                <Stack.Screen
                  name="TabProducto"
                  options={{
                    headerShown: false,
                  }}
                  component={TabProducto} />
                <Stack.Screen
                  name="TabCliente"
                  options={{
                    headerShown: false,
                  }}
                  component={TabCliente} />
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen
                  name="ProductoScreen"
                  options={{
                    headerShown: false,
                  }}
                  component={ProductoScreen} />
              </Stack.Group>
            </>
          )

      }
    </Stack.Navigator>
  );
};

export default RootNavigation;
