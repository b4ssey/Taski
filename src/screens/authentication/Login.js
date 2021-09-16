import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Headline,
  Paragraph,
  TextInput,
  Button,
  Portal,
  Snackbar,
} from "react-native-paper";
import Taski from "../../../assets/taski.svg";
import UserModel from "../../app/models/UserModel";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const validateInput = () => {
    let errors = false;

    if (!email || email.length === 0) {
      errors = true;
    }

    if (!password || password.length === 0) {
      errors = true;
    }

    return !errors;
  };

  const authenticateUser = async () => {
    if (validateInput()) {
      setLoading(true);
      const user = new UserModel(email, password);

      try {
        await user.login();
      } catch (err) {
        setError(err.message);
        setVisible(true);
        setLoading(false);
      }
    } else {
      setError("Please fill out all *required fields");
      setVisible(true);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      </>

      <Taski width={105} style={{ alignSelf: "center" }} />
      <View style={{ height: 32 }} />

      {/* <TaskiLogin width={85} style={{ alignSelf: "center" }} /> */}

      <View>
        <Headline style={styles.appTitle}>Start with taski</Headline>
        <Paragraph style={styles.appDesc}>
          Join us now and get your daily things right
        </Paragraph>
      </View>

      <>
        <View style={styles.divider} />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          label="*Email Address"
          placeholder="your@email.com"
          mode="outlined"
          theme={{ colors: { primary: "#7EBB4F" } }}
        />
      </>

      <>
        <View style={styles.divider} />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          label="*Password"
          placeholder="Input password here..."
          mode="outlined"
          secureTextEntry
          theme={{ colors: { primary: "#7EBB4F" } }}
        />
      </>

      <>
        <View style={styles.divider} />
        <Button
          loading={loading}
          disabled={loading}
          style={styles.btn}
          onPress={() => authenticateUser()}
          mode="contained"
          contentStyle={{ backgroundColor: "#7EBB4F", height: 48 }}
        >
          Login
        </Button>

        <>
          <Portal>
            <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
              {error}
            </Snackbar>
          </Portal>
        </>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
  },
  appTitle: {
    textAlign: "center",
    fontSize: 24,
    lineHeight: 35,
    fontWeight: "700",
    color: "#0B0A11",
  },
  svg: {
    alignSelf: "center",
  },
  appDesc: { textAlign: "center" },
  divider: { height: 16 },
  btn: {
    // height: 50,
    // paddingTop: 6,
  },
});

export default Login;
