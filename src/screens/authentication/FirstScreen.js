import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Caption, Headline } from "react-native-paper";
import Taski from "../../../assets/taski.svg";
import TaskiLogin from "../../../assets/taskiLogin.svg";
import AppSafeAreaView from "../../components/reusables/AppSafeAreaView";

function FirstScreen({ navigation }) {
  return (
    <AppSafeAreaView SAVstyle={{ justifyContent: "space-between" }}>
      <Taski style={{ alignSelf: "center" }} />
      <TaskiLogin />
      <View>
        <View>
          <Headline style={[styles.text, { fontWeight: "700" }]}>
            Start with taski
          </Headline>
          <Caption style={[styles.text]}>
            Join us now and get your daily things right
          </Caption>
          <View style={{ height: "5%" }} />
          <Button
            mode="contained"
            uppercase={false}
            onPress={() => navigation.navigate("login")}
          >
            Login
          </Button>
          <View style={{ height: "5%" }} />
          <Button
            mode="outlined"
            uppercase={false}
            onPress={() => navigation.navigate("register")}
          >
            Register
          </Button>
        </View>
      </View>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default FirstScreen;
