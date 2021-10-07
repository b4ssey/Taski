import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import AddRoute from "../../screens/main/Add";
import CalendarRoute from "../../screens/main/Calendar";
import ListRoute from "../../screens/main/List";

function Overview(props) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "list", title: "List View", icon: "format-list-bulleted-type" },
    { key: "add", title: "Add Task", icon: "playlist-plus" },
    { key: "calendar", title: "Calendar View", icon: "calendar-month-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    list: ListRoute,
    add: AddRoute,
    calendar: CalendarRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default Overview;
