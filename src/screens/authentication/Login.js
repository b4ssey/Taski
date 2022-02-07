import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet } from "react-native";
import {
  Headline,
  Paragraph,
  Button,
  Portal,
  Snackbar,
  Caption,
} from "react-native-paper";
import Taski from "../../../assets/taski.svg";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";
import RHFInput from "../../components/reusables/RHFInput";
import { loginUser } from "../../store/ducks/users";

function Login({ navigation }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const HandleOnSubmit = (data) => {
    dispatch(
      loginUser({
        email: data.email,
        password: data.password,
      })
    );
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        <RHFInput
          name="email"
          control={control}
          label="Email Address"
          placeholder="your@email.com"
          mode="outlined"
          rules={{ required: "Email is required" }}
        />
        {/* <TextInput
          label="Email Address"
          placeholder="your@email.com"
          mode="outlined"
        /> */}
      </>

      <>
        <View style={styles.divider} />
        <RHFInput
          name="password"
          control={control}
          label="Password"
          placeholder="Input password here..."
          mode="outlined"
          rules={{ required: "Password is required" }}
        />
        {/* <TextInput
          onChangeText={(text) => setPassword(text)}
          label="Password"
          placeholder="Input password here..."
          mode="outlined"
          secureTextEntry
        /> */}
      </>

      <>
        <View style={styles.divider} />
        <Button
          style={styles.btn}
          onPress={handleSubmit(HandleOnSubmit)}
          mode="contained"
          uppercase={false}
        >
          Login
        </Button>
        <View style={[styles.rowView, { justifyContent: "center" }]}>
          <Paragraph>Don't have Account?</Paragraph>
          <Button
            uppercase={false}
            onPress={() => {
              navigation.navigate("register");
            }}
          >
            Register
          </Button>
        </View>

        <>
          <Portal>
            <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
              {(errors.email && errors.email.message) ||
                (errors.password && errors.password.message)}
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
