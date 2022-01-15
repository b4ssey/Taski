import { DefaultTheme } from "react-native-paper";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import merge from "deepmerge";

const theme = merge(NavigationDefaultTheme, {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5D9C2D",
    accent: "#5B0D58",
    background: "#F4F4F4",
    text: "#0B0A11",
    placeholder: "rgba(11, 10, 17, 0.3)",
  },
});

export default theme;
