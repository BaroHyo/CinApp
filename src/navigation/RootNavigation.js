import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClienteScreen, FormProductoScreen, ProductoScreen, VisitaScreen } from '../screens/pedido';


const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="pedido"
                    component={ClienteScreen}
                    options={{ headerShown: true, }}
                />
                <Stack.Screen
                    name="visita"
                    component={VisitaScreen}
                    options={{ headerShown: true, }}
                />
                <Stack.Screen
                    name="productos"
                    component={ProductoScreen}
                    options={{ headerShown: true, }}
                />
                <Stack.Screen
                    name="form"
                    component={FormProductoScreen}
                    options={{ headerShown: true, }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation