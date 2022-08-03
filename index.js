import React from 'react'
import { AppRegistry, useColorScheme } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { MD3DarkTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

/*const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1A1A1A",
    accent: "#FAFAFA"
  },
};

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FAFAFA",
    accent: "#1A1A1A",
  },
};*/

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
   // primary: 'tomato',
   // secondary: 'yellow',
  },
};

export default function Main() {
  //  const scheme = useColorScheme();

  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
