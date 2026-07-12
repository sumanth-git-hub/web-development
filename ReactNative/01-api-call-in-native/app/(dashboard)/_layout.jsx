import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { SignedIn, useAuth } from "@clerk/clerk-expo";

const DashBoardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const {isSignedIn, isLoaded} = useAuth();

  if(!isLoaded) return null;
  if(!isSignedIn){
    return <Redirect href = "/(auth)/login" />
  }
console.log("AUTH STATE:", isLoaded, isSignedIn);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 10,
          height: 90,
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
        <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={
                focused ? "arrow-up-right-box" : "arrow-up-right-box-outline"
              }
              color={focused ? theme.iconColorFocused : theme.iconColor}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="recipes"
        options={{
          title: "Recipes",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "fast-food" : "fast-food-outline"}
              color={focused ? theme.iconColorFocused : theme.iconColor}
            />
          ),
        }}
      />
            <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "person" : "person-outline"}
              color={focused ? theme.iconColorFocused : theme.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
      name="items/[productId]"
      options={{href: null}}
      />
      <Tabs.Screen
      name="recipes/[recipesId]"
      options={{href: null}}
      />
    </Tabs>
  );
};

export default DashBoardLayout;

const styles = StyleSheet.create({});
