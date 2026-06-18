import 'localstorage-polyfill';
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from "../context/UserContext";
import { BooksProvider } from "../context/BooksContext";

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <UserProvider>
      <BooksProvider>
    <StatusBar value = "auto" />
    <Stack
    initialRouteName = "index"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.iconColor,
        headerTitleStyle: {color: theme.title},
        headerShown: true
      }}
    >
      <Stack.Screen name="(auth)" options={{headerShown: false}} />
      <Stack.Screen name="(dashboard)" options={{headerShown: false}} />
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
     
    </Stack>
          </BooksProvider>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
