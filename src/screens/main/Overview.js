import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TodoList } from "../../components/list/TodoList";

function Overview(props) {
  return <TodoList />;
}

const styles = StyleSheet.create({
  container: {},
});

export default Overview;
