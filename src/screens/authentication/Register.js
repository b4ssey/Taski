import React from "react";
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

function Register(props) {
  const [checked, setChecked] = React.useState(false);
  return (
    <AppKBAreaView KAVstyle={{ justifyContent: "space-between" }}>
      <View>
        <Headline style={[{ fontWeight: "700" }]}>Join us today.</Headline>
        <Caption>It’s Nice too see you, let’s start</Caption>
        <View style={{ height: "5%" }} />
        <TextInput
          label="Full Name"
          placeholder="Input your full name here…"
          mode="outlined"
        />
        <View style={{ height: "2.5%" }} />
        <TextInput
          label="Email Address"
          placeholder="yourname@email.com"
          mode="outlined"
        />
        <View style={{ height: "2.5%" }} />
        <TextInput
          label="Phone Number"
          placeholder="Input your phone number here..."
          mode="outlined"
        />
        <View style={{ height: "2.5%" }} />
        <TextInput
          label="Password"
          placeholder="Input password here..."
          mode="outlined"
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
        <Button mode="contained" uppercase={false}>
          Register
        </Button>
        <View style={[styles.rowView, { justifyContent: "center" }]}>
          <Paragraph>Already have Account?</Paragraph>
          <Button uppercase={false}>Login</Button>
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
