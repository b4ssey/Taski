import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Checkbox,
  Headline,
  Paragraph,
  TextInput,
} from "react-native-paper";

function Register(props) {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <Headline>Join us today.</Headline>
      <Paragraph>It’s Nice too see you, let’s start</Paragraph>
      <TextInput label="Full Name" placeholder="Input your full name here…" />
      <TextInput label="Email Address" placeholder="yourname@email.com" />
      <TextInput
        label="Phone Number"
        placeholder="Input your phone number here..."
      />
      <TextInput label="Password" placeholder="Input password here..." />
      <View style={{ flexDirection: "row" }}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Paragraph>I Agree with Terms & Conditions</Paragraph>
        <Button mode="contained">Register</Button>
        <View style={{ flexDirection: "row" }}>
          <Paragraph>Already have Account?</Paragraph>
          <Button uppercase={false}>Login</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#F2F2F2", padding: "5%" },
});

export default Register;
