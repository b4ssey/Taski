import React, { useState } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddRoute from "../../screens/main/Add";
import CalendarRoute from "../../screens/main/Calendar";
import ListRoute from "../../screens/main/List";
import Feedback from "../../screens/main/Feedback";
import MyProfile from "../../screens/main/MyProfile";
import YourProfile from "../../screens/main/YourProfile";

const Stack = createNativeStackNavigator();

function Overview(props) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "list", title: "List View", icon: "format-list-bulleted-type" },
    { key: "add", title: "Add Task", icon: "playlist-plus" },
    { key: "calendar", title: "Calendar View", icon: "calendar-month-outline" },
  ]);

  const ListStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="list"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="list" component={ListRoute} />
        <Stack.Screen name="feedback" component={Feedback} />
        <Stack.Screen name="my" component={MyProfile} />
        <Stack.Screen name="your" component={YourProfile} />
      </Stack.Navigator>
    );
  };

  const renderScene = BottomNavigation.SceneMap({
    list: ListStack,
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
