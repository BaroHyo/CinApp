import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { AuthContext } from '../context/AuthContext';
import ClientesScreen from '../screens/ClientesScreen';
import { TabCliente } from "./TabCliente";


const Stack = createNativeStackNavigator();

const RootNavigation = () => {

    const { status } = useContext(AuthContext);

    return (
        <Stack.Navigator>
            {

                (status !== 'authenticated')
                    ?
                    (<>
                        <Stack.Screen name="LoginScreen"
                            options={{
                                headerShown: false
                            }}
                            component={LoginScreen} />
                    </>) : (
                        <>
                            <Stack.Screen name="HomeScreen"
                                options={{
                                    headerShown: false
                                }}
                                component={HomeScreen} />
                            <Stack.Screen name="TabCliente"
                                options={{
                                    headerShown: false
                                }}
                                component={TabCliente} />
                        </>
                    )

            }
        </Stack.Navigator>
    )
}

export default RootNavigation
