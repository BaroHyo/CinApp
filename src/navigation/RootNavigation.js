import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthContext";
import { TabCliente } from "./TabCliente";
import { TabProducto } from "./TabProducto";
import { ModalProducto, ProductoScreen } from "../screens/producto";
import { PermissionsContext } from "../context/PermissionsContext";
import LoadingScreen from "../screens/LoadingScreen";
import { PermissionsScreen } from "../screens/PermisoScreen";
import { MapaScreen } from "../screens/MapaScreen";
import { ProductoStack } from "./ProductoStack";


const Stack = createNativeStackNavigator();


const NavigationHome = () => {

  const { permission } = useContext(PermissionsContext);

  if (permission.locationStatus === "unavailable") {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator>
      {
        (permission.locationStatus === "granted")
          ? (
            <>
            </>
          ) : (
            <Stack.Screen name="PermissionsScreen"
                          component={PermissionsScreen}
                          options={{ headerShown: false }} />
          )
      }
    </Stack.Navigator>
  );
};


const RootNavigation = () => {

  const { status } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {
        (status !== "authenticated") ? (
          <Stack.Screen
            name="LoginScreen"
            options={{
              headerShown: false,
            }}
            component={LoginScreen} />
        ) : (
          <>
            <Stack.Group>
              <Stack.Screen
                name="HomeScreen"
                options={{
                  headerShown: false,
                }}
                component={HomeScreen} />
              <Stack.Screen
                name="ProductoStack"
                options={{
                  headerShown: false,
                }}
                component={ProductoStack} />
              <Stack.Screen
                name="TabCliente"
                options={{
                  headerShown: false,
                }}
                component={TabCliente} />
              <Stack.Screen
                name="MapaScreen"
                options={{
                  headerShown: false,
                }}
                component={MapaScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal" }}>
              <Stack.Screen
                name="ModalProducto"
                options={{
                  headerShown: false,
                }}
                component={ModalProducto} />
            </Stack.Group>
          </>
        )
      }
    </Stack.Navigator>
  );
};

export default RootNavigation;

