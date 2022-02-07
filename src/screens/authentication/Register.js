import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Caption,
  Checkbox,
  Headline,
  Paragraph,
  HelperText,
  ActivityIndicator,
  Portal,
  Snackbar,
} from "react-native-paper";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";
import RHFInput from "../../components/reusables/RHFInput";
import { registerUser } from "../../store/ducks/users";

function Register({ navigation }) {
  // const [checked, setChecked] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const { errorMessage, isError, isFetching } = useSelector(
    (state) => state.user
  );
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const OnHandleSubmit = (data) => {
    dispatch(
      registerUser({
        name: data.fullname,
        email: data.email,
        password: data.password,
      })
    );
  };

  useEffect(() => {
    if (isError) setVisible(true);
  }, [isFetching]);

  useEffect(() => {
    if (
      errorMessage ==
      "User was registered successfully! Please check your email"
    )
      navigation.navigate("verification");
    else {
      reset();
    }
  }, [errorMessage]);

  return (
    <AppKBAreaView KAVstyle={{}}>
      <View>
        <Headline style={[{ fontWeight: "700" }]}>Join us today.</Headline>
        <Caption>It’s Nice too see you, let’s start</Caption>

        <View style={{ height: "5%" }} />
        <>
          <RHFInput
            name="fullname"
            control={control}
            label="Full Name"
            placeholder="Input your full name here…"
            mode="outlined"
            autoCapitalize="none"
            rules={{
              required: "Full Name is required",
            }}
          />
          {errors.fullname ? (
            <HelperText type="error">{errors?.fullname?.message}</HelperText>
          ) : (
            <View style={{ height: "2.5%" }} />
          )}
        </>

        <>
          <RHFInput
            name="email"
            control={control}
            label="Email Address"
            placeholder="yourname@email.com"
            mode="outlined"
            autoCapitalize="none"
            rules={{
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            }}
          />
          {errors.email ? (
            <HelperText type="error">{errors?.email?.message}</HelperText>
          ) : (
            <View style={{ height: "2.5%" }} />
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
            rules={{ required: "password is required" }}
          />
          {errors.password ? (
            <HelperText type="error">{errors?.password?.message}</HelperText>
          ) : (
            <View style={{ height: "2.5%" }} />
          )}
        </>
      </View>
      <>
        <View>
          {isFetching ? (
            <ActivityIndicator animating={true} />
          ) : (
            <Button
              mode="contained"
              uppercase={false}
              onPress={handleSubmit(OnHandleSubmit)}
            >
              Register
            </Button>
          )}
          <View style={[styles.rowView, { justifyContent: "center" }]}>
            <Paragraph>Already have Account?</Paragraph>
            <Button
              uppercase={false}
              onPress={() => navigation.navigate("login")}
            >
              Login
            </Button>
          </View>
          <>
            <Portal>
              <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
                {errorMessage}
              </Snackbar>
            </Portal>
          </>
        </View>
      </>
    </AppKBAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Register;
