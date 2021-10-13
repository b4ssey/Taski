import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Appbar, Searchbar, Text } from "react-native-paper";
import Taski from "../../../assets/taski.svg";
import TaskiEmpty from "../../../assets/taskiEmpty.svg";
import Todo from "../../components/list/Todo";
import AppSafeAreaView from "../../components/reusables/AppSafeAreaView";

const emptydata = [];
const dummydata = [
  {
    id: 1,
    title: "Client Meetings",
    timeDate: "March 16, 2021 — 12.00 PM",
    notes:
      "Asking for some insight from marketing perspective. Take notes and more.",
    tag: "Urgent",
  },
  {
    id: 2,
    title: "Investing Some Money",
    timeDate: "Today — 09.00",
    notes: "Daily Investing for APPL.",
    tag: "Normal",
  },
  {
    id: 4,
    title: "Meetings",
    timeDate: "Tommorrow — 10.00",
    notes: "Attending meetings",
    tag: "High",
  },
  {
    id: 5,
    title: "Client Event",
    timeDate: "Yesterday — 09.30",
    notes: "Go for client event",
    tag: "Normal",
  },
  {
    id: 6,
    title: "Workout",
    timeDate: "Today — 09.00",
    notes: "Take some workout time",
    tag: "Low",
  },
];

function List(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <StatusBar hidden />
      <Appbar style={styles.bar}>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Taski width={66} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar>
      <AppSafeAreaView SAVstyle={{ paddingTop: "2.5%" }}>
        <FlatList
          data={dummydata}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  alignItems: "center",
                  marginTop: "33.333%",
                }}
              >
                <TaskiEmpty />
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <Searchbar
                placeholder="Search task here"
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            );
          }}
          renderItem={({ item }) => {
            return (
              <Todo
                title={item.title}
                timeDate={item.timeDate}
                notes={item.notes}
                tag={item.tag}
              />
            );
          }}
        />
      </AppSafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  bar: { backgroundColor: "#F2F2F2", justifyContent: "space-between" },
});

export default List;
