import React, { useMemo, useState } from "react";
import { Agenda } from "react-native-calendars";
import Todo from "../../components/list/Todo";
import AppSafeAreaView from "../../components/reusables/AppSafeAreaView";
import format from "date-fns/format";
import { useSelector, useDispatch } from "react-redux";

function Calender(props) {
  const [date, setDate] = useState(new Date());
  const calendarDate = format(date, "yyyy-MM-dd");
  const { todos } = useSelector((state) => state.todo);
  const [modTodos, setModTodos] = useState({});

  useMemo(() => {
    // const newTodow = todos.map((x) => {
    //   return { ...x, dateChosen: format(Date.parse(c.dateChosen) };
    // });
    // console.log("hey hey", newTodow);
    const newTodo = todos.reduce(
      (o, c) => ({
        ...o,
        [format(Date.parse(c.dateChosen), "yyyy-MM-dd")]: [c],
      }),
      {}
    );
    setModTodos(newTodo);
  }, []);

  // console.log(calendarDate);
  return (
    <AppSafeAreaView>
      <Agenda
        items={modTodos}
        renderItem={(item) => {
          return (
            <Todo
              title={item.title}
              timeDate={item.timeDate}
              notes={item.note}
              tag={item.tag}
            />
          );
        }}
        renderEmptyData={() => {
          return null;
        }}
        selected={calendarDate}
        theme={{
          selectedDayBackgroundColor: "#CAEDAF",
          dotColor: "#3E7911",
          agendaDayTextColor: "#CAEDAF",
          agendaDayNumColor: "#CAEDAF",
          agendaTodayColor: "#5D9C2D",
          todayTextColor: "#5D9C2D",
        }}
      />
    </AppSafeAreaView>
  );
}

export default Calender;
