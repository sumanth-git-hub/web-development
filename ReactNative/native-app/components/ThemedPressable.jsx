import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const ThemedPressable = ({style, ...props}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

export default ThemedPressable;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});
