import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Maps } from '../screens/Maps';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function PublicRoutes() {
  return (

    <Navigator screenOptions={{ headerShown: false }}>
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
      {/* <Screen
        name="Maps"
        component={Maps}
        options={{ title: "Selecionar localização", headerShadowVisible: false }}
      />
        */}
    </Navigator>

  );
}