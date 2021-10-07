import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

function List(props) {
  return (
    <View style={styles.container}>
      <Text>List me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default List;
