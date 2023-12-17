import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Maps } from "../screens/Maps";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import TelaUsuario from "../screens/User"; 

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <Navigator>
      <Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "", headerShadowVisible: false }}
      />
      <Screen
        name="Maps"
        component={Maps}
        options={{ title: "Selecionar localização", headerShadowVisible: false }}
      />
      <Screen
        name="TelaUsuario"
        component={TelaUsuario}
        options={{ title: "Perfil do Usuário", headerShadowVisible: false }}
      />
    </Navigator>
  );
}
