import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import { AuthProvider } from './src/context/AuthContext';
import { ClienteProvider } from './src/context/ClienteContext';



const AppState = ({ children }) => {
    return (
        <AuthProvider>
            <ClienteProvider>
                {children}
            </ClienteProvider>
        </AuthProvider>
    )
}



const App = () => {

  return (
        <NavigationContainer>
            <SafeAreaProvider>
                <AppState>
                    <RootNavigation />
                </AppState>
            </SafeAreaProvider>
        </NavigationContainer>

    )
}
export default App
