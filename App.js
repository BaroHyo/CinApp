import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { AuthProvider } from "./src/context/AuthContext";
import { ClienteProvider } from "./src/context/ClienteContext";
import { ProductoProvider } from "./src/context/ProductoContext";
import { useTheme } from "react-native-paper";
import { PermissionsProvider } from "./src/context/PermissionsContext";


const AppState = ({ children }) => {
  return (
    <AuthProvider>
      <PermissionsProvider>
        <ClienteProvider>
          <ProductoProvider>
            {children}
          </ProductoProvider>
        </ClienteProvider>
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
