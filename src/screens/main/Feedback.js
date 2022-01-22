import React from "react";
import { useForm } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { Button, Caption, Headline, TextInput } from "react-native-paper";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";
import RHFInput from "../../components/reusables/RHFInput";

function Feedback({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      <RHFInput
        name="name"
        control={control}
        label="Name"
        placeholder="FirstName LastName"
        mode="outlined"
        rules={{ required: "notes is required" }}
      />
      {/* <TextInput
        label="Name"
        placeholder="FirstName LastName"
        mode="outlined"
      /> */}
      <View style={{ height: "1.25%" }} />
      <RHFInput
        name="feedback"
        control={control}
        label="Feedback"
        placeholder="Feedback"
        mode="outlined"
        rules={{ required: "feedback is required" }}
      />
      {/* <TextInput
        label="Feedback"
        placeholder="Feedback"
        mode="outlined"
      /> */}
      <View style={{ height: "2.5%" }} />
      <Button
        onPress={() => {
          navigation.goback();
          handleSubmit((data) => console.log(data));
        }}
        mode="contained"
      >
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
