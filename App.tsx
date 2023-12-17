import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { Loading } from "./src/components/Loading";
import { THEME } from "./src/global/styles/themes";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer
        theme={{
          colors: {
            background: THEME.colors.background_primary,
            primary: "default",
            card: THEME.colors.background_primary,
            text: "default",
            border: "default",
            notification: "default",
          },
          dark: true,
        }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {!fontsLoaded ? <Loading /> : <Routes />}
      </NavigationContainer>
    </ThemeProvider>
  );
}
