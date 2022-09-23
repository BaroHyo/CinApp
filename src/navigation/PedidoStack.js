import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  FormPedidoScreen,
  ModalFormPedido,
  ProductoScreen,
  ResumenScreen,
  VisitaScreen,
} from "../screens/pedido";

const Stack = createNativeStackNavigator();

export const PedidoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="ModalFormPedido"
        component={ModalFormPedido} />
      <Stack.Screen
        name="FormPedidoScreen"
        component={FormPedidoScreen} />
      <Stack.Screen
        name="ProductoPedidoScreen"
        component={ProductoScreen} />
      <Stack.Screen
        name="VisitaScreen"
        component={VisitaScreen} />
      <Stack.Screen
        name="ResumenScreen"
        component={ResumenScreen} />
    </Stack.Navigator>
  );
};
