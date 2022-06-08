import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  StyleSheet,
  Platform,
  Dimensions,
  RefreshControl,
} from "react-native";
import { FlatList, DrawerLayout } from "react-native-gesture-handler";
import {
  Appbar,
  Searchbar,
  Drawer,
  Menu,
  Divider,
  Portal,
  Modal,
  Dialog,
  Button,
  HelperText,
  Snackbar,
} from "react-native-paper";
import Taski from "../../../assets/taski.svg";
import TaskiEmpty from "../../../assets/taskiEmpty.svg";
import Todo from "../../components/list/Todo";
import AppSafeAreaView from "../../components/reusables/AppSafeAreaView";
import RHFInput from "../../components/reusables/RHFInput";
import SwipeableRow from "../../components/reusables/SwipeableRow";
import { logoutUser } from "../../store/ducks/users";
import { deleteTodo, getTodos, modifyTodo } from "../../store/ducks/todos";
import { format } from "date-fns";

const handleDrawerSlide = (status) => {
  // outputs a value between 0 and 1
  // console.log("status", status);
};

function List({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  const [specTodo, setSpecTodo] = useState([]);
  const [portVis, setPortVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(true);
  const dispatch = useDispatch();
  const { todos, isFetching, isError, errorMessage } = useSelector(
    (state) => state.todo
  );
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let drawer = null;

  const showDialogEd = (td) => {
    setEdit(true);
    setSpecTodo(td);
  };
  const hideDialogEd = () => setEdit(false);
  const showDialogDel = (oo) => {
    setDel(true);
    setSpecTodo(oo);
  };
  const hideDialogDel = () => setDel(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const HandleOnSubmit = (data) => {
    dispatch(
      modifyTodo({
        id: specTodo._id,
        state: {
          title: data.title,
          note: data.notes,
          owner: specTodo.owner._id,
          tag: specTodo.tag,
          dateChosen: specTodo.dateChosen,
        },
      })
    );
    if (isError) return setPortVisible(true);
    reset();
    hideDialogEd();
    dispatch(getTodos());
  };

  useEffect(() => {
    if (isError) setPortVisible(true);
  }, []);

  useEffect(() => {
    dispatch(getTodos());
    // setRefreshing(false);
  }, []);

  const onRefresh = useCallback(() => {
    dispatch(getTodos());
  }, []);

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
            <Menu.Item
              onPress={() => {
                onRefresh();
              }}
              title="Refresh"
            />
            <Divider />
            <Menu.Item onPress={() => dispatch(logoutUser())} title="Logout" />
          </Menu>
        </Appbar>

        <AppSafeAreaView SAVstyle={{ paddingTop: "2.5%" }}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item._id.toString()}
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
                <>
                  {/* {isFetching ? <ActivityIndicator /> : null} */}
                  <Searchbar
                    placeholder="Search task here"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                  />
                </>
              );
            }}
            refreshControl={
              <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => {
              return (
                <SwipeableRow
                  // pressHandler={showDialogDel}
                  pressHandlerOne={() => showDialogEd(item)}
                  pressHandlerTwo={() => showDialogDel(item)}
                >
                  <Todo
                    title={item.title}
                    timeDate={format(
                      Date.parse(item.dateChosen),
                      "MMM d, yyyy - p"
                    )}
                    notes={item.note}
                    tag={item.tag}
                  />
                </SwipeableRow>
              );
            }}
          />
        </AppSafeAreaView>
      </DrawerLayout>

      <>
        <Portal>
          <Dialog
            visible={edit}
            onDismiss={hideDialogEd}
            contentContainerStyle={styles.modal}
          >
            <View style={{ paddingHorizontal: "5%" }}>
              <Dialog.Title>Edit Todo</Dialog.Title>
              <RHFInput
                name="title"
                control={control}
                label="Task Title"
                placeholder="Title"
                mode="outlined"
                rules={{ required: "title is required" }}
                defaultValue={specTodo.title}
              />
              {errors.title ? (
                <HelperText type="error">{errors?.title?.message}</HelperText>
              ) : (
                <HelperText>Currrent Title: {specTodo.title}</HelperText>
              )}
              {/* <View style={{ height: "5%" }} /> */}
              <RHFInput
                name="notes"
                control={control}
                label="Notes"
                placeholder="Input task notes…"
                mode="outlined"
                rules={{ required: "notes is required" }}
                defaultValue={specTodo.note}
              />
              {errors.notes ? (
                <HelperText type="error">{errors?.notes?.message}</HelperText>
              ) : (
                <HelperText>Currrent Note: {specTodo.note}</HelperText>
              )}

              <View style={{ height: "5%" }} />
              <Dialog.Actions>
                <Button onPress={handleSubmit(HandleOnSubmit)}>Save</Button>
                <Button onPress={() => hideDialogEd()}>Discard</Button>
              </Dialog.Actions>
            </View>
          </Dialog>
        </Portal>
      </>
      <>
        <Portal>
          <Dialog visible={del} onDismiss={hideDialogDel}>
            <Dialog.Title>Are you sure you want to delete?</Dialog.Title>
            <Dialog.Actions>
              <Button onPress={() => dispatch(deleteTodo(specTodo?._id))}>
                Yes, Delete.
              </Button>
              <Button onPress={() => hideDialogDel()}>No</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </>
      <Portal>
        <Snackbar visible={portVis} onDismiss={() => setPortVisible(false)}>
          {errorMessage}
        </Snackbar>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  bar: {
    // backgroundColor: "#F2F2F2",
    justifyContent: "space-between",
  },
  modal: { backgroundColor: "white", paddingHorizontal: "5%" },
});

export default List;
