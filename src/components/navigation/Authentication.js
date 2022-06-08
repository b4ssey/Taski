import React from "react";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/authentication/Login";
import Register from "../../screens/authentication/Register";
import Verification from "../../screens/authentication/Verification";
import FirstScreen from "../../screens/authentication/FirstScreen";

const Stack = createNativeStackNavigator();

const Authentication = () => {
  return (
    <Stack.Navigator
      initialRouteName="first"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="first" component={FirstScreen} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="verification" component={Verification} />
    </Stack.Navigator>
  );
};

export default Authentication;
