import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Headline,
  Menu,
  Paragraph,
  Title,
  ToggleButton,
  IconButton,
  Card,
  Caption,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";
import { format } from "date-fns";
import RHFInput from "../../components/reusables/RHFInput";
import { useForm } from "react-hook-form";
import { createTodo } from "../../store/ducks/todos";

function Add() {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [tag, setTag] = useState(null);
  const [value, setValue] = useState("left");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const formatedDate = format(date, "MMM d, yyyy - p");
  const dispatch = useDispatch();

  const { errorMessage, isError, isFetching } = useSelector(
    (state) => state.user
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const HandleOnSubmit = (data) => {
    dispatch(
      createTodo({
        title: data.title,
        notes: data.notes,
        tag,
        date,
      })
    );
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <>
      <AppKBAreaView
        KAVstyle={{ paddingTop: Platform.OS == "ios" ? "10%" : "0%" }}
      >
        <Headline style={{ fontWeight: "700", alignSelf: "center" }}>
          Add New Task
        </Headline>
        <>
          <RHFInput
            name="title"
            control={control}
            label="Task Title"
            placeholder="Input task title…"
            mode="outlined"
            rules={{ required: "title is required" }}
          />
          <View style={{ height: "5%" }} />
        </>
        <>
          <RHFInput
            name="notes"
            control={control}
            label="Notes"
            placeholder="Input task notes…"
            mode="outlined"
            rules={{ required: "notes is required" }}
          />
          <View style={{ height: "5%" }} />
        </>

        <Paragraph>Tag</Paragraph>
        <View style={{ height: "2.5%" }} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button mode="outlined" onPress={openMenu}>
              {tag ? tag : "-Select Priority-"}
            </Button>
          }
        >
          <Menu.Item onPress={() => setTag("Urgent")} title="Urgent" />
          <Menu.Item onPress={() => setTag("High")} title="High" />
          <Menu.Item onPress={() => setTag("Normal")} title="Normal" />
          <Menu.Item onPress={() => setTag("Low")} title="Low" />
        </Menu>
        <View style={{ height: "5%" }} />
        <View style={styles.rows}>
          <Title style={{ fontWeight: "700" }}>Remind Me</Title>
          <ToggleButton.Row
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <ToggleButton icon="numeric-1" value="left" />
            <ToggleButton icon="all-inclusive" value="right">
              Repeat
            </ToggleButton>
          </ToggleButton.Row>
        </View>
        <View style={{ height: "5%" }} />
        <Card>
          <Card.Content>
            <View style={styles.rows}>
              <View>
                <Caption>Date & Time</Caption>
                <Title>{formatedDate}</Title>
              </View>
              <View>
                <IconButton
                  icon="calendar-edit"
                  color={"#B7B7B7"}
                  size={20}
                  onPress={showDatepicker}
                />
                <IconButton
                  icon="clock-outline"
                  color={"#B7B7B7"}
                  size={20}
                  onPress={showTimepicker}
                />
              </View>
            </View>
          </Card.Content>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </Card>
        <View style={{ height: "2.5%" }} />
        <Button
          mode="contained"
          uppercase={false}
          onPress={handleSubmit(HandleOnSubmit)}
        >
          Save Task
        </Button>
      </AppKBAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  bar: {
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    paddingTop: "10%",
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Add;
