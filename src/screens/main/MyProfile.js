import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Caption,
  Subheading,
  Text,
  Title,
  List,
  Chip,
} from "react-native-paper";
import AppSafeAreaView from "../../components/reusables/AppSafeAreaView";

function MyProfile({ navigation }) {
  return (
    <>
      <AppSafeAreaView SAVstyle={{}}>
        <View style={{ alignItems: "center" }}>
          {/* <Headline>Hey!</Headline> */}
          <View style={{ height: "1.25%" }} />
          <Image
            source={require("../../../assets/ekemini-spoof.png")}
            style={{ height: 200, width: 200 }}
          />
          <Title>Ekemini Bassey</Title>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/nigeria.png")}
              style={{ height: 20, width: 20 }}
            />
            <View style={{ width: "1.25%" }} />
            <Image
              source={require("../../../assets/united-kingdom.png")}
              style={{ height: 20, width: 20 }}
            />
          </View>
        </View>
        <View style={{ height: "2.5%" }} />
        <Caption style={{ textAlign: "center" }}>
          Hey, I am a Software developer currently transitioning into
          Application Security. Still want to be in the Software development
          area because there is still so much to learn. I am proficient in
          Javascript, Python, C, Assembly. I can{" "}
          <Text style={{ fontStyle: "italic" }}>read and understand</Text> Java.
        </Caption>
        {/* <Caption>
          I built both the Frontend and Backend of this Application. Utilized
          React Native, Redux toolkit for state management, React Native Paper
          for UI development and React Hook Form for front-end validation. For
          the Backend,Utilixzed Nodejs, and MongoDb for my Database
        </Caption> */}

        <View style={{ height: "5%" }} />
        <Subheading>You can contact me personally</Subheading>
        <>
          <List.Item
            title="https://github.com/b4ssey"
            left={(props) => <List.Icon {...props} icon="github" />}
          />
          <List.Item
            title="/in/ekemini-bassey-754735180/"
            left={(props) => <List.Icon {...props} icon="linkedin" />}
          />
          <List.Item
            title="https://twitter.com/b_ssey"
            left={(props) => <List.Icon {...props} icon="twitter" />}
          />
          <List.Item
            title="bassey.ekemini.e@gmail.com"
            left={(props) => <List.Icon {...props} icon="gmail" />}
          />
        </>
      </AppSafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyProfile;
