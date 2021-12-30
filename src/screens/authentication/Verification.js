import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Caption, Headline, Paragraph, Text } from "react-native-paper";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import AppKBAreaView from "../../components/reusables/AppKBAreaView";

function Verification() {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 5;
  return (
    <AppKBAreaView KAVstyle={{}}>
      <View>
        <Headline style={{ fontWeight: "700" }}>Verify Your Account</Headline>
        <Caption>
          It’s only one more step, please check your verification code at your
          email
        </Caption>
        <View style={{ height: "10%" }} />
        <>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            // rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </>
        <View style={{ height: "10%" }} />
        <View style={{ alignItems: "center" }}>
          <Paragraph>Don’t Receive the verification code?</Paragraph>
          <Button uppercase={false}>Resend Code</Button>
        </View>
      </View>

      <Button mode="contained">Verify Account</Button>
    </AppKBAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
  },
  cellText: {
    color: "#0B0A11",
    fontSize: 18,
    textAlign: "center",
  },
  focusCell: {
    // borderBottomColor: "#F4648B",
    borderBottomWidth: 2,
  },
});

export default Verification;
