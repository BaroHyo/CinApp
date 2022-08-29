import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthContext";
import { TabCliente } from "./TabCliente";
import { TabProducto } from "./TabProducto";
import { ProductoScreen } from "../screens/producto";
import { PermissionsContext } from "../context/PermissionsContext";
import LoadingScreen from "../screens/LoadingScreen";
import { PermissionsScreen } from "../screens/PermisoScreen";
import { MapaScreen } from "../screens/MapaScreen";


const Stack = createNativeStackNavigator();


const RootNavigation = () => {

  const { permission } = useContext(PermissionsContext);

  const { status } = useContext(AuthContext);

  if (permission.locationStatus === "unavailable") {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator>
      {
        (permission.locationStatus === "granted")
          ?
          (<>
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
                    <Stack.Screen
                      name="MapaScreen"
                      options={{
                        headerShown: false,
                      }}
                      component={MapaScreen} />
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

          </>)
          : (
            <Stack.Screen name="PermissionsScreen"
                          component={PermissionsScreen}
                          options={{ headerShown: false }} />
          )
      }
    </Stack.Navigator>
  );
};

export default RootNavigation;

