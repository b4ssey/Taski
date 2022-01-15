import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

console.log(Platform.OS);

function AppKBAreaView({ children, KAVstyle }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, KAVstyle]}
    >
      <>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      </>
      {children}
    </KeyboardAvoidingView>
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

export default AppKBAreaView;
