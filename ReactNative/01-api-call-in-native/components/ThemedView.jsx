import { StyleSheet, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
    const insets = useSafeAreaInsets();

 return (
  <View 
  style = {[{backgroundColor: theme.background, ...(safe && {paddingTop: insets.top, paddingBottom: insets.bottom})}, style, styles.container]} {...props}
  /> )
};

export default ThemedView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
    paddingInline: 20
  },
});
