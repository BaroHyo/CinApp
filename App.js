import React from "react";
import { LogBox } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { useTheme } from "react-native-paper";
import { AuthProvider, ClienteProvider, PedidoProvider, PermissionsProvider, ProductoProvider } from "./src/context";


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const AppState = ({ children }) => {
  return (
    <AuthProvider>
      <PermissionsProvider>
        <PedidoProvider>
          <ClienteProvider>
            <ProductoProvider>
              {children}
            </ProductoProvider>
          </ClienteProvider>
        </PedidoProvider>
      </PermissionsProvider>
    </AuthProvider>
  );
};


const App = () => {
  const theme = useTheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppState>
          <RootNavigation />
        </AppState>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
