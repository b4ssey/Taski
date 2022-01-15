import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

function AppSafeAreaView({ children, SAVstyle }) {
  return (
    <View style={[styles.container, SAVstyle]}>
      <>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      </>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    paddingTop: "15%",
    alignContent: "center",
    // backgroundColor: "#F4F4F4",
  },
});

export default AppSafeAreaView;
