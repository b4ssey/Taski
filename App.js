import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./src/store/store";
import theme from "./src/components/theme";
import darkTheme from "./src/components/darktheme";
import Feedback from "./src/screens/main/Feedback";
import MyProfile from "./src/screens/main/MyProfile";
import Root from "./src/components/navigation/Root";

export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer theme={theme}>
        <PaperProvider theme={theme}>
          <Root />
        </PaperProvider>
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}
