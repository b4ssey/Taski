import React from "react";
import { View, StyleSheet, Animated, I18nManager } from "react-native";
import { RectButton, Swipeable } from "react-native-gesture-handler";
import { Text, Button } from "react-native-paper";

const RenderLeftAction = ({ pressHandler }) => {
  return (
    <RectButton onPress={pressHandler}>
      <Animated.Text>Archive</Animated.Text>
    </RectButton>
  );
};

const RenderRightAction = ({ text, icon, color, pressHandler }) => {
  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: 0 }] }}>
      <RectButton
        style={[styles.rightAction, { backgroundColor: color }]}
        onPress={pressHandler}
      >
        <Button icon={icon} color="black">
          {text}
        </Button>
        {/* <Text style={styles.actionText}>{text}</Text> */}
      </RectButton>
    </Animated.View>
  );
};

const CustomRightTaskiAction = ({ pressHandlerOne, pressHandlerTwo }) => {
  return (
    <View
      style={{
        width: 192,
        flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
        paddingVertical: "5%",
        borderRadius: 5,
      }}
    >
      <RenderRightAction
        icon="square-edit-outline"
        text="Edit"
        // color="#C8C7CD"
        x={192}
        pressHandler={pressHandlerOne}
      />
      <RenderRightAction
        icon="delete"
        text="Delete"
        // color="#dd2c00"
        x={64}
        pressHandler={pressHandlerTwo}
      />
    </View>
  );
};

function SwipeableRow({
  children,
  pressHandler,
  pressHandlerOne,
  pressHandlerTwo,
}) {
  return (
    <Swipeable
      //   ref={this.updateRef}
      friction={2}
      // leftThreshold={30}
      rightThreshold={40}
      // renderLeftActions={RenderLeftAction}
      renderRightActions={() =>
        CustomRightTaskiAction({
          pressHandlerOne: pressHandlerOne,
          pressHandlerTwo: pressHandlerTwo,
        })
      }
    >
      {children}
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {},
  leftAction: {
    flex: 1,
    backgroundColor: "#497AFC",
    justifyContent: "center",
  },
  actionText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 10,
  },
  rightAction: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default SwipeableRow;
