import "styled-components/native";

import { THEME } from "../global/styles/themes";

type ThemeType = typeof THEME;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
