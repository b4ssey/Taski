import React, { useState, useEffect } from "react";
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
  HelperText,
  Snackbar,
  ActivityIndicator,
  Portal,
} from "react-native-paper";
import LottieView from "lottie-react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";
import format from "date-fns/format";
import differenceInSeconds from "date-fns/differenceInSeconds";
import RHFInput from "../../components/reusables/RHFInput";
import { useForm } from "react-hook-form";
import { createTodo } from "../../store/ducks/todos";

function Add({ navigation }) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [tag, setTag] = useState(null);
  const [tagError, setTagError] = useState("");
  const [dateError, setDateError] = useState("");
  const [value, setValue] = useState("left");
  const [date, setDate] = useState(new Date());
  const [prevDate, setPrevDate] = useState(null);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const formatedDate = format(date, "MMM d, yyyy - p");
  const dispatch = useDispatch();

  const { errorMessage, isError, isFetching, isSuccess } = useSelector(
    (state) => state.todo
  );
  const { id } = useSelector((state) => state.user);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const HandleOnSubmit = (data) => {
    if (!tag) return setTagError("Tag not set.");
    if (!differenceInSeconds(prevDate, date))
      return setDateError("Date not set.");
    dispatch(
      createTodo({
        title: data.title,
        note: data.notes,
        owner: id,
        tag,
        dateChosen: date,
      })
    );
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setPrevDate(date);
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

  useEffect(() => {
    if (isError) setVisible(true);
    // if (dateError) setVisible(true);
    // if (tagError) setVisible(true);
  }, [isFetching, dateError, tagError]);

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
          {errors.title ? (
            <HelperText type="error">{errors?.title?.message}</HelperText>
          ) : (
            <View style={{ height: "2.5%" }} />
          )}
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
          {errors.notes ? (
            <HelperText type="error">{errors?.notes?.message}</HelperText>
          ) : (
            <View style={{ height: "5%" }} />
          )}
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
          <Menu.Item onPress={() => setTag("urgent")} title="Urgent" />
          <Menu.Item onPress={() => setTag("high")} title="High" />
          <Menu.Item onPress={() => setTag("normal")} title="Normal" />
          <Menu.Item onPress={() => setTag("low")} title="Low" />
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
        {isFetching ? (
          <ActivityIndicator animating={true} />
        ) : isSuccess ? (
          <LottieView
            source={require("../../../assets/success2.json")}
            onAnimationFinish={() => navigation.navigate()}
          />
        ) : (
          <Button
            mode="contained"
            uppercase={false}
            onPress={handleSubmit(HandleOnSubmit)}
          >
            Save Task
          </Button>
        )}

        <>
          <Portal>
            <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
              {errorMessage || dateError || tagError}
            </Snackbar>
          </Portal>
        </>
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
