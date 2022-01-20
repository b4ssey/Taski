import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet, Platform, Dimensions } from "react-native";
import { FlatList, DrawerLayout } from "react-native-gesture-handler";
import { Appbar, Searchbar, Drawer, Menu, Divider } from "react-native-paper";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Taski from "../../../assets/taski.svg";
import TaskiEmpty from "../../../assets/taskiEmpty.svg";
import Todo from "../../components/list/Todo";
import AppSafeAreaView from "../../components/reusables/AppSafeAreaView";

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

const handleDrawerSlide = (status) => {
  // outputs a value between 0 and 1
  // console.log("status", status);
};

function List({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  let drawer = null;

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const renderDrawer = () => {
    return (
      <>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Drawer.Section title="Others....">
            <Drawer.Item
              label="Dark Mode"
              active={active === "first"}
              onPress={() => setActive("first")}
            />
            <Drawer.Item
              label="Send Feedback"
              active={active === "second"}
              onPress={() => {
                setActive("second");
                navigation.navigate("feedback");
              }}
            />
            {/* <Drawer.Item
              label="Buy me a Coffee"
              active={active === "third"}
              onPress={() => setActive("third")}
            /> */}
          </Drawer.Section>
          <Drawer.Section title="About....">
            <Drawer.Item
              label="You"
              active={active === "F"}
              onPress={() => {
                setActive("F");
                navigation.navigate("your");
              }}
            />
            <Drawer.Item
              label="Me"
              active={active === "G"}
              onPress={() => {
                setActive("G");
                navigation.navigate("my");
              }}
            />
          </Drawer.Section>
        </View>
      </>
    );
  };

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <StatusBar hidden />
      <DrawerLayout
        ref={(refDrawer) => (drawer = refDrawer)}
        drawerWidth={Dimensions.get("window").width * 0.6}
        drawerPosition={DrawerLayout.positions.Left}
        drawerType="front"
        drawerBackgroundColor="#ddd"
        renderNavigationView={() => renderDrawer()}
        onDrawerSlide={() => handleDrawerSlide()}
      >
        <Appbar style={styles.bar}>
          <Appbar.Action icon="menu" onPress={() => drawer.openDrawer()} />
          {Platform.OS == "android" && <Taski width={66} />}
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action
                icon="dots-vertical"
                onPress={() => openMenu()}
                color={"#ffffff"}
              />
            }
            style={{ marginTop: "10%" }}
          >
            <Menu.Item onPress={() => {}} title="Refresh" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Logout" />
          </Menu>
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
      </DrawerLayout>

      {/* <DrawerLayout
        drawerWidth={200}
        drawerPosition={DrawerLayout.positions.Right}
        drawerType="front"
        drawerBackgroundColor="#ddd"
        renderNavigationView={renderDrawer}
        onDrawerSlide={handleDrawerSlide}
      >
        <View>
          <Text>Hello, it's me</Text>
        </View>
      </DrawerLayout> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  bar: {
    // backgroundColor: "#F2F2F2",
    justifyContent: "space-between",
  },
});

export default List;
