import React from "react";
import { useForm } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Caption,
  Checkbox,
  Headline,
  Paragraph,
  TextInput,
} from "react-native-paper";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";
import AppSafeAreaView from "../../components/reusables/AppSafeAreaView";
import RHFInput from "../../components/reusables/RHFInput";
import { registerUser } from "../../store/ducks/users";

function Register({ navigation }) {
  const [checked, setChecked] = React.useState(false);
  const {
    control,
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

  return (
    <AppKBAreaView KAVstyle={{}}>
      <View>
        <Headline style={[{ fontWeight: "700" }]}>Join us today.</Headline>
        <Caption>It’s Nice too see you, let’s start</Caption>
        <View style={{ height: "5%" }} />
        {/* <TextInput
          label="Full Name"
          placeholder="Input your full name here…"
          mode="outlined"
        /> */}
        <RHFInput
          name="fullname"
          control={control}
          label="Full Name"
          placeholder="Input your full name here…"
          mode="outlined"
          rules={{ required: "Full Name is required" }}
        />
        <View style={{ height: "2.5%" }} />
        {/* <TextInput
          label="Email Address"
          placeholder="yourname@email.com"
          mode="outlined"
        /> */}
        <RHFInput
          name="email"
          control={control}
          label="Email Address"
          placeholder="yourname@email.com"
          mode="outlined"
          rules={{ required: "email is required" }}
        />
        <View style={{ height: "2.5%" }} />
        {/* <TextInput
          label="Phone Number"
          placeholder="Input your phone number here..."
          mode="outlined"
        /> */}
        <RHFInput
          name="number"
          control={control}
          label="Phone Number"
          placeholder="Input your phone number here..."
          mode="outlined"
          rules={{ required: "number is required" }}
        />
        <View style={{ height: "2.5%" }} />
        {/* <TextInput
          label="Password"
          placeholder="Input password here..."
          mode="outlined"
        /> */}
        <RHFInput
          name="password"
          control={control}
          label="Password"
          placeholder="Input password here..."
          mode="outlined"
          rules={{ required: "password is required" }}
        />
        <View style={{ height: "2.5%" }} />
        <View style={styles.rowView}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Paragraph>I Agree with Terms & Conditions</Paragraph>
        </View>
      </View>
      <View>
        <Button
          mode="contained"
          uppercase={false}
          onPress={() => {
            navigation.navigate("verification");
            handleSubmit(OnHandleSubmit);
          }}
        >
          Register
        </Button>
        <View style={[styles.rowView, { justifyContent: "center" }]}>
          <Paragraph>Already have Account?</Paragraph>
          <Button
            uppercase={false}
            onPress={() => navigation.navigate("login")}
          >
            Login
          </Button>
        </View>
      </View>
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
