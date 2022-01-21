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
import { persistor, store } from "./src/store/Store";
import Authentication from "./src/components/navigation/Authentication";
import Overview from "./src/components/navigation/Overview";
import Verification from "./src/screens/authentication/Verification";
import theme from "./src/components/theme";
import Login from "./src/screens/authentication/Login";
import Register from "./src/screens/authentication/Register";
import FirstScreen from "./src/screens/authentication/FirstScreen";
import Todo from "./src/components/list/Todo";
import darkTheme from "./src/components/darktheme";
import Feedback from "./src/screens/main/Feedback";
import MyProfile from "./src/screens/main/MyProfile";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={theme}>
          <PaperProvider theme={theme}>
            <MyProfile />
          </PaperProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
