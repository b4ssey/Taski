import React from "react";
import { View, StyleSheet } from "react-native";
import { Caption, Headline, Text } from "react-native-paper";

function MyProfile({ navigation }) {
  return (
    <>
      <Headline>Hey!</Headline>
      {/* avaticon for Ekemini */}
      <Text>Ekemini Bassey</Text>
      {/* put Nigerian and UK flag */}
      <Caption>
        I am a Software developer currently transitioning into Application
        Security. Still want to be in the Software development area because
        there is still so much to learn. I am proficient in Javascript, Python,
        C, Assembly. I can <i>read and understand</i> Java.
      </Caption>
      <Text>You can contact me personally</Text>
      <Caption>Github</Caption>
      <Caption>LinkedIn</Caption>
      <Caption>Twitter</Caption>
      <Caption>PSN Name</Caption>
      {/* put icon beside links */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyProfile;
