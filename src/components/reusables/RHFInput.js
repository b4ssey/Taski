import React from "react";
import { useController } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

function RHFInput({
  label,
  placeholder,
  mode,
  control,
  name,
  rules = { required: "false" },
  ...props
}) {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
    rules: rules,
  });
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      mode={mode}
      value={field.value}
      onChangeText={field.onChange}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RHFInput;
