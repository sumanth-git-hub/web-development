import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link, Redirect } from "expo-router";
import logo from "../assets/favicon.png";
import React from "react";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import { useAuth } from "@clerk/clerk-expo";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const {isSignedIn, isLoaded} = useAuth()

  if(!isLoaded) return null
  
  if(isSignedIn) {
    return <Redirect href={"/(dashboard)/products"} />
  } else {
    return <Redirect href={"/(auth)/login"} />
  }
  return (
    <ThemedView safe = {true}>
      <Image source={logo} style={styles.img} />
      <Spacer height={20} />
      <ThemedText
        style={[{ fontWeight: "bold" }, styles.titleText]}
        title={true}
      >
        Home
      </ThemedText>
      <Spacer height={10} />
      <Link href={"/register"}><ThemedText>Register Page</ThemedText></Link>
      <Spacer height={10} />
      <Link href={"/login"}><ThemedText>Login page</ThemedText></Link>
      <Spacer height={20} />
      <Link href={"/products"}>
      <ThemedText style={{
        textDecoration: "underline",
        textDecorationStyle: "dotted"
      }}>
        View Data
      </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
  },
  img: {
    width: 30,
    height: 30,
  },
});
