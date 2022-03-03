import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import {
  Headline,
  Paragraph,
  Button,
  Portal,
  Snackbar,
  Caption,
  HelperText,
  ActivityIndicator,
} from "react-native-paper";
import Taski from "../../../assets/taski.svg";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";
import RHFInput from "../../components/reusables/RHFInput";
import { loginUser } from "../../store/ducks/users";

function Login({ navigation }) {
  const [visible, setVisible] = useState(false);
  const { errorMessage, isError, isFetching, isSuccess } = useSelector(
    (state) => state.user
  );

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

  useEffect(() => {
    if (isError) setVisible(true);
  }, [isError]);

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
      <View style={styles.divider} />
      <>
        <RHFInput
          name="email"
          control={control}
          label="Email Address"
          placeholder="your@email.com"
          mode="outlined"
          autoCapitalize="none"
          rules={{ required: "Email is required" }}
        />
        {errors.email ? (
          <HelperText type="error">{errors?.email?.message}</HelperText>
        ) : (
          <View style={styles.divider} />
        )}
      </>

      <>
        <RHFInput
          name="password"
          control={control}
          label="Password"
          placeholder="Input password here..."
          mode="outlined"
          autoCapitalize="none"
          rules={{ required: "Password is required" }}
        />
        {errors.password ? (
          <HelperText type="error">{errors?.password?.message}</HelperText>
        ) : (
          <View style={styles.divider} />
        )}
      </>

      <>
        <View style={styles.divider} />
        {isFetching ? (
          <ActivityIndicator animating={true} />
        ) : (
          <Button
            style={styles.btn}
            onPress={handleSubmit(HandleOnSubmit)}
            mode="contained"
            uppercase={false}
          >
            Login
          </Button>
        )}
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
      </>
      <>
        <KeyboardAvoidingView>
          <Portal>
            <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
              {errorMessage}
            </Snackbar>
          </Portal>
        </KeyboardAvoidingView>
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
