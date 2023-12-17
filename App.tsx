import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { THEME } from "./src/global/styles/themes";

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import { AuthProviderContext } from "./src/context/AuthProvider";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={THEME}>
      
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthProviderContext>
          {!fontsLoaded ? <Loading /> : <Routes />}
        </AuthProviderContext>
    </ThemeProvider>
  );
}
