import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5D9C2D",
    accent: "#5B0D58",
    background: "#FFFFFF",
    text: "#0B0A11",
    placeholder: "rgba(11, 10, 17, 0.3)",
  },
};

export default theme;
