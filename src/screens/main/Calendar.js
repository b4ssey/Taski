import React, { useState } from "react";
import { Agenda } from "react-native-calendars";
import Todo from "../../components/list/Todo";
import AppSafeAreaView from "../../components/reusables/AppSafeAreaView";
import { format } from "date-fns";
import { View } from "react-native-web";

function Calender(props) {
  const [date, setDate] = useState(new Date());
  const calendarDate = format(date, "yyyy-MM-dd");

  // console.log(calendarDate);
  return (
    <AppSafeAreaView>
      <Agenda
        items={{
          "2021-12-30": [
            {
              title: "Client Meetings",
              timeDate: "March 16, 2021 — 12.00 PM",
              notes:
                "Asking for some insight from marketing perspective. Take notes and more.",
              tag: "Urgent",
            },
            {
              title: "Investing Some Money",
              timeDate: "Today — 09.00",
              notes: "Daily Investing for APPL.",
              tag: "Normal",
            },
          ],
          "2021-12-29": [
            {
              title: "Client Event",
              timeDate: "Yesterday — 09.30",
              notes: "Go for client event",
              tag: "Normal",
            },
            {
              title: "Workout",
              timeDate: "Today — 09.00",
              notes: "Take some workout time",
              tag: "Low",
            },
          ],
        }}
        renderItem={(item) => {
          return (
            <Todo
              title={item.title}
              timeDate={item.timeDate}
              notes={item.notes}
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
