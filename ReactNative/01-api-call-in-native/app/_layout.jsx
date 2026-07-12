import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import {ClerkProvider} from "@clerk/clerk-expo"


const tokenCache = {
  async getToken(key) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (err) {}
  },
};


const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  
    
  return (
   <ClerkProvider publishableKey= {process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
   <StatusBar value="auto" />
    <Stack 
    initialRouteName = "index"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: theme.navBackground},
        headerTintColor: theme.title,
        animation: "none"
      }}
    >
      <Stack.Screen name = "(auth)" options={{headerShown: false}} />
      <Stack.Screen name="(dashboard)"  options={{headerShown: false}}/>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="dataList" options={{ title: "Products", headerShown: false }} />
    </Stack>
   </ClerkProvider>
  );
};

export default RootLayout;