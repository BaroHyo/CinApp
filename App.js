import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { AuthProvider } from "./src/context/AuthContext";
import { ClienteProvider } from "./src/context/ClienteContext";
import { ProductoProvider } from "./src/context/ProductoContext";
import { useTheme } from "react-native-paper";


const AppState = ({ children }) => {
  return (
    <AuthProvider>
      <ClienteProvider>
        <ProductoProvider>
          {children}
        </ProductoProvider>
      </ClienteProvider>
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
