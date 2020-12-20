import { theme } from "helpers/theme";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

declare module "react-use-gesture";
