import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { AuthProvider, ClienteProvider, PedidoProvider, PermissionsProvider, ProductoProvider } from "./src/context";
import { LogBox } from "react-native";


LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);


const AppState = ({ children }) => {
  return (
    <AuthProvider>
      <PermissionsProvider>
        <ClienteProvider>
          <ProductoProvider>
            <PedidoProvider>
              {children}
            </PedidoProvider>
          </ProductoProvider>
        </ClienteProvider>
      </PermissionsProvider>
    </AuthProvider>
  );
};


const App = () => {
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
