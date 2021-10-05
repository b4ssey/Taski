import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Headline, Paragraph } from "react-native-paper";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

function Verification() {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  return (
    <View style={styles.container}>
      <Headline>Verify Your Account</Headline>
      <Paragraph>
        It’s only one more step, please check your verification code at your
        email
      </Paragraph>
      <>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
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
      <View style={{ alignItems: "center" }}>
        <Paragraph>Don’t Receive the verification code?</Paragraph>
        <Button uppercase={false}>Resend Code</Button>
      </View>

      <Button mode="contained">Verify Account</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#F2F2F2", padding: "5%" },
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#F4648B",
    borderBottomWidth: 2,
  },
});

export default Verification;
