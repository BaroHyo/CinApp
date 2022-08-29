import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { useTheme } from "react-native-paper";
import { AuthProvider, ClienteProvider, PedidoProvider, PermissionsProvider, ProductoProvider } from "./src/context";

const AppState = ({ children }) => {
  return (
    <AuthProvider>
      <PedidoProvider>
        <ClienteProvider>
          <ProductoProvider>
            {children}
          </ProductoProvider>
        </ClienteProvider>
      </PedidoProvider>
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
