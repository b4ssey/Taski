import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Caption, Headline, TextInput } from "react-native-paper";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";

function Feedback(props) {
  return (
    <AppKBAreaView>
      <Headline style={{ fontWeight: "700", alignSelf: "center" }}>
        Send Ekemini a Feedback!
      </Headline>
      <Caption>
        Thank you for taking time out to download my personal project. I would
        love to hear your criticisms and how I can do better, Cheers!
      </Caption>
      <TextInput
        label="Name"
        placeholder="FirstName LastName"
        mode="outlined"
      />
      <TextInput
        label="Name"
        placeholder="FirstName LastName"
        mode="outlined"
      />
      <Button>Submit</Button>
    </AppKBAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Feedback;
