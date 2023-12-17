import { NavigationContainer } from '@react-navigation/native';
import { PublicRoutes } from './routes.public';
import { PrivateRoutes } from './routes.private';
import { useAuth } from '../hooks/useAuth';
import { THEME } from "../global/styles/themes";

export function Routes() {
  const { tokenState } = useAuth();
  return (
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
      }}>
      {
        !!tokenState ? <PrivateRoutes /> : <PublicRoutes />
      }
    </NavigationContainer>
  );
}