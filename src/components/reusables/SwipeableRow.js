import React from "react";
import { View, StyleSheet, Animated, I18nManager } from "react-native";
import { RectButton, Swipeable } from "react-native-gesture-handler";

const RenderLeftAction = ({ progress, dragX }) => {
  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101],
    outputRange: [-20, 0, 0, 1],
  });
  return (
    <RectButton>
      <Animated.Text>Archive</Animated.Text>
    </RectButton>
  );
};

const RenderRightAction = ({ text, color, x, progress, pressHandler }) => {
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [x, 0],
  });
  //   const pressHandler = () => {
  //     close();
  //     alert(text);
  //   };
  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: 0 }] }}>
      <RectButton
        style={[styles.rightAction, { backgroundColor: color }]}
        onPress={pressHandler}
      >
        <Text style={styles.actionText}>{text}</Text>
      </RectButton>
    </Animated.View>
  );
};

const customRightTaskiAction = (progress) => {
  return (
    <View
      style={{
        width: 192,
        flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
      }}
    >
      <RenderRightAction
        text="More"
        color="#C8C7CD"
        x={192}
        progress={progress}
      />
      <RenderRightAction
        text="Flag"
        color="#ffab00"
        x={128}
        progress={progress}
      />
      <RenderRightAction
        text="More"
        color="#dd2c00"
        x={64}
        progress={progress}
      />
    </View>
  );
};

function SwipeableRow({ children }) {
  return (
    <Swipeable
      //   ref={this.updateRef}
      friction={2}
      leftThreshold={30}
      rightThreshold={40}
      renderLeftActions={RenderLeftAction}
      renderRightActions={RenderRightAction}
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
