import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
// import CalendarStrip from "react-native-calendar-strip";
import AppSafeAreaView from "../../components/reusables/AppSafeAreaView";
import ReactNativeCalendarStrip from "react-native-calendar-strip";

function Calender(props) {
  return (
    <AppSafeAreaView>
      {/* <Agenda /> */}
      <ReactNativeCalendarStrip
        // scrollable
        style={{ height: 200, paddingTop: 20, paddingBottom: 10 }}
        calendarColor={"#3343CE"}
        calendarHeaderStyle={{ color: "white" }}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white" }}
        iconContainer={{ flex: 0.1 }}
      />
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Calender;
