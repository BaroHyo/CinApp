import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from "react-native-paper";


const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: "#fb8c00",
    secondary: "#558b2f",
    tertiary: "#a1b2c3",
  },
};


export default function Main() {
  return (
    <PaperProvider theme={lightTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
