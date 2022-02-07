import React from "react";
import "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authentication from "./Authentication";
import Overview from "./Overview";

const Stack = createNativeStackNavigator();

const Root = () => {
  const { token } = useSelector((state) => state.user);

  return (
    <Stack.Navigator
      initialRouteName="authentication"
      screenOptions={{ headerShown: false }}
    >
      {!token ? (
        <Stack.Screen name="authentication" component={Authentication} />
      ) : (
        <Stack.Screen name="overview" component={Overview} />
      )}
    </Stack.Navigator>
  );
};

export default Root;
