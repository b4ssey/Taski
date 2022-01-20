import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Headline,
  Paragraph,
  TextInput,
  Button,
  Portal,
  Snackbar,
  Caption,
} from "react-native-paper";
import Taski from "../../../assets/taski.svg";
import UserModel from "../../app/models/UserModel";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";
import AppSafeAreaView from "../../components/reusables/AppSafeAreaView";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // const validateInput = () => {
  //   let errors = false;

  //   if (!email || email.length === 0) {
  //     errors = true;
  //   }

  //   if (!password || password.length === 0) {
  //     errors = true;
  //   }

  //   return !errors;
  // };

  // const authenticateUser = async () => {
  //   if (validateInput()) {
  //     setLoading(true);
  //     const user = new UserModel(email, password);

  //     try {
  //       await user.login();
  //     } catch (err) {
  //       setError(err.message);
  //       setVisible(true);
  //       setLoading(false);
  //     }
  //   } else {
  //     setError("Please fill out all *required fields");
  //     setVisible(true);
  //     setLoading(false);
  //   }
  // };

  return (
    <AppKBAreaView SAVstyle={{ justifyContent: "center" }}>
      <Taski width={105} style={{ alignSelf: "center" }} />
      <View style={{ height: "5%" }} />

      <View>
        <Headline style={[styles.text, { fontWeight: "700" }]}>
          Start with taski
        </Headline>
        <Caption style={[styles.text]}>
          Join us now and get your daily things right
        </Caption>
      </View>

      <>
        <View style={styles.divider} />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          label="Email Address"
          placeholder="your@email.com"
          mode="outlined"
        />
      </>

      <>
        <View style={styles.divider} />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          label="Password"
          placeholder="Input password here..."
          mode="outlined"
          secureTextEntry
        />
      </>

      <>
        <View style={styles.divider} />
        <Button
          // loading={loading}
          // disabled={loading}
          style={styles.btn}
          onPress={() => navigation.navigate("register")}
          mode="contained"
          uppercase={false}
        >
          Login
        </Button>
        <View style={[styles.rowView, { justifyContent: "center" }]}>
          <Paragraph>Don't have Account?</Paragraph>
          <Button
            uppercase={false}
            onPress={() => navigation.navigate("register")}
          >
            Register
          </Button>
        </View>

        <>
          <Portal>
            <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
              {error}
            </Snackbar>
          </Portal>
        </>
      </>
    </AppKBAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  divider: { height: 16 },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Login;
