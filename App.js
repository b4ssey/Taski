import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
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

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <FirstScreen />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
