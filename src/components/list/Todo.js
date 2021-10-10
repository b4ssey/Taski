import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Caption,
  Card,
  Paragraph,
  Title,
  Text,
  Chip,
  Badge,
} from "react-native-paper";

function Todo({ title, timeDate, notes, tag }) {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    switch (tag) {
      case "Urgent":
        setBgColor("#F06868");
        break;
      case "High":
        setBgColor("#FAB57A");
        break;
      case "Normal":
        setBgColor("#80D6FF");
        break;
      case "Low":
        setBgColor("#EDF798");
        break;
      default:
        setBgColor("#FFFFFF");
    }
  });
  return (
    <Card style={{ marginVertical: "2.5%" }}>
      <Card.Content>
        <Title style={{ fontWeight: "700" }}>{title}</Title>
        <Caption>{timeDate}</Caption>
        <Paragraph>{notes}</Paragraph>
        <View style={[styles.tag, { backgroundColor: bgColor }]}>
          <Paragraph style={{ color: "#FFFFFF" }}>{tag}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  tag: {
    marginVertical: "2.5%",
    padding: "0.5%",
    width: "25%",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default Todo;
