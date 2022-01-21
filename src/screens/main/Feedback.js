import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Caption, Headline, TextInput } from "react-native-paper";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";

function Feedback({ navigation }) {
  return (
    <AppKBAreaView>
      <View style={styles.divider} />
      <Headline style={{ fontWeight: "700", alignSelf: "center" }}>
        Send Ekemini a Feedback!
      </Headline>
      <View style={styles.divider} />
      <Caption>
        Thank you for taking time out to download my personal project. I would
        love to hear your criticisms and how I can do better, Cheers!
      </Caption>
      <View style={styles.divider} />
      <TextInput
        label="Name"
        placeholder="FirstName LastName"
        mode="outlined"
      />
      <View style={{ height: "1.25%" }} />
      <TextInput
        label="Feedback"
        placeholder="FirstName LastName"
        mode="outlined"
      />
      <View style={{ height: "2.5%" }} />
      <Button onPress={() => navigation.goback()} mode="contained">
        Submit
      </Button>
    </AppKBAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  divider: { height: "5%" },
});

export default Feedback;
