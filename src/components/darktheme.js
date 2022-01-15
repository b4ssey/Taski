import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import merge from "deepmerge";
import { DarkTheme } from "react-native-paper";

const darkTheme = merge(NavigationDarkTheme, {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#B3F581",
    accent: "#162708",
    background: "#212121",
    surface: "#44483E",
    placeholder: "#74796D",
    // backdrop: "#74796D",
    // onSurface: "#74796D",
    text: "#E3E3DC",
  },
});

export default darkTheme;
